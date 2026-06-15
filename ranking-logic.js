/**
 * SUBMANHWA · Quiniela Mundial
 * ranking-logic.js - El cerebro matemático del ranking
 */

// Reglas de puntuación de la Quiniela
const POINTS_CONFIG = {
  PERFECT_MATCH: 3,  // Acertar el marcador exacto (Ej: Apostó 2-1, quedó 2-1)
  WINNER_ONLY: 1,    // Acertar solo quién ganó o empate, pero no los goles exactos (Ej: Apostó 3-0, quedó 1-0)
  NO_HIT: 0          // No acertar a nada
};

/**
 * Calcula los puntos obtenidos en una apuesta comparada con el resultado oficial
 * @param {Object} bet - La apuesta del usuario ({ homeScore, awayScore })
 * @param {Object} result - El resultado oficial ({ homeScore, awayScore })
 * @returns {Number} Puntos obtenidos
 */
function calculateBetPoints(bet, result) {
  const bHome = Number(bet.homeScore);
  const bAway = Number(bet.awayScore);
  const rHome = Number(result.homeScore);
  const rAway = Number(result.awayScore);

  // 1. ¿Marcador exacto? -> 3 Puntos
  if (bHome === rHome && bAway === rAway) {
    return POINTS_CONFIG.PERFECT_MATCH;
  }

  // Determinar tendencias (Ganador o Empate)
  const betTrend = bHome > bAway ? 'HOME' : bHome < bAway ? 'AWAY' : 'DRAW';
  const resultTrend = rHome > rAway ? 'HOME' : rHome < rAway ? 'AWAY' : 'DRAW';

  // 2. ¿Acertó la tendencia (ganador o empate)? -> 1 Punto
  if (betTrend === resultTrend) {
    return POINTS_CONFIG.WINNER_ONLY;
  }

  // 3. No pegó nada -> 0 Puntos
  return POINTS_CONFIG.NO_HIT;
}

/**
 * Procesa todas las apuestas y resultados para consolidar el ranking por usuario
 * @param {Object} allBets - Nodo completo de 'bets' de Firebase
 * @param {Object} officialResults - Nodo completo de 'results' de Firebase
 * @returns {Array} Ranking ordenado de mayor a menor [{ username, points, exacts, tendencies, totalMatches }]
 */
export function buildRankingData(allBets, officialResults) {
  const userScores = {};

  // Si no hay resultados oficiales registrados en el historial aún, devolvemos lista vacía limpia
  if (!officialResults) return [];

  // Recorrer cada partido que ya tiene un resultado oficial asentado
  Object.keys(officialResults).forEach(matchId => {
    const result = officialResults[matchId];
    const matchBets = allBets[matchId];

    // Si hay apuestas registradas para este partido concluido, las evaluamos
    if (matchBets) {
      Object.values(matchBets).forEach(bet => {
        // Normalizamos el nombre de usuario para evitar duplicados por mayúsculas/minúsculas involuntarias
        const rawName = (bet.username || "").trim();
        if (!rawName) return; // Ignorar si está vacío
        
        const usernameKey = rawName.toLowerCase();

        // Si el usuario no existe en nuestro acumulador, lo inicializamos
        if (!userScores[usernameKey]) {
          userScores[usernameKey] = {
            username: rawName, // Guardamos el formato original que escribió primero
            points: 0,
            exacts: 0,
            tendencies: 0,
            totalMatches: 0
          };
        }

        // Calcular los puntos de esta apuesta específica
        const pointsEarned = calculateBetPoints(bet, result);
        
        // Sumar estadísticas al perfil del competidor
        userScores[usernameKey].points += pointsEarned;
        userScores[usernameKey].totalMatches += 1;
        
        if (pointsEarned === POINTS_CONFIG.PERFECT_MATCH) {
          userScores[usernameKey].exacts += 1;
        } else if (pointsEarned === POINTS_CONFIG.WINNER_ONLY) {
          userScores[usernameKey].tendencies += 1;
        }
      });
    }
  });

  // Convertir el objeto de acumulados a un Array ejecutable para ordenarlo
  const rankingList = Object.values(userScores);

  // Ordenar el Ranking bajo criterios profesionales:
  // 1. Mayor puntaje total.
  // 2. En caso de empate en puntos, desempata quien tenga más marcadores exactos (el más calidoso).
  // 3. Si persiste el empate, se ordena alfabéticamente.
  rankingList.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    if (b.exacts !== a.exacts) {
      return b.exacts - a.exacts;
    }
    return a.username.localeCompare(b.username);
  });

  return rankingList;
}
