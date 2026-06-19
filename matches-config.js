// CONFIGURACIÓN DE LOS 4 PARTIDOS DE MAÑANA (19 DE JUNIO) - GRUPOS C Y D

const GROUPS = {
  "C": [
    {
      id: "match_c1",
      groupName: "Grupo C",
      date: "Mañana · 5:00 p. m.",
      closeTime: "2026-06-19T17:00:00-05:00", // Cierre automático hora Colombia
      cardsInPlay: 2,
      home: { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", card: "MITICO-escocia.jpg" },
      away: { name: "Marruecos", flag: "🇲🇦", card: "MITICO-marruecos.jpg" }
    },
    {
      id: "match_c2",
      groupName: "Grupo C",
      date: "Mañana · 7:30 p. m.",
      closeTime: "2026-06-19T19:30:00-05:00",
      cardsInPlay: 2,
      home: { name: "Brasil", flag: "🇧🇷", card: "MITICO-brasil.jpg" },
      away: { name: "Haití", flag: "🇭🇹", card: "MITICO-haiti.jpg" }
    }
  ],
  "D": [
    {
      id: "match_d1",
      groupName: "Grupo D",
      date: "Mañana · 2:00 p. m.",
      closeTime: "2026-06-19T14:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Estados Unidos", flag: "🇺🇸", card: "MITICO-estadosunidos.jpg" },
      away: { name: "Australia", flag: "🇦🇺", card: "MITICO-australia.jpg" }
    },
    {
      id: "match_d2",
      groupName: "Grupo D",
      date: "Mañana · 10:00 p. m.",
      closeTime: "2026-06-19T22:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Turquía", flag: "🇹🇷", card: "MITICO-turquia.jpg" },
      away: { name: "Paraguay", flag: "🇵🇾", card: "MITICO-paraguay.jpg" }
    }
  ]
};
