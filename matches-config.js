// CONFIGURACIÓN DE LOS 4 PARTIDOS DE MAÑANA (18 DE JUNIO) - GRUPOS A Y B

const GROUPS = {
  "A": [
    {
      id: "match_a1",
      groupName: "Grupo A",
      date: "Mañana · 11:00 a. m.",
      closeTime: "2026-06-18T11:00:00-05:00", // Cierre automático hora Colombia
      cardsInPlay: 2,
      home: { name: "Chequia", flag: "🇨🇿", card: "MITICO-chequia.jpg" },
      away: { name: "Sudáfrica", flag: "🇿🇦", card: "MITICO.sudafrica.jpg" } // Ojo: en tu repo está con punto "MITICO.sudafrica.jpg"
    },
    {
      id: "match_a2",
      groupName: "Grupo A",
      date: "Mañana · 8:00 p. m.",
      closeTime: "2026-06-18T20:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "México", flag: "🇲🇽", card: "MITICO-mexico.jpg" },
      away: { name: "Corea del Sur", flag: "🇰🇷", card: "MITICO-coreadelsur.jpg" }
    }
  ],
  "B": [
    {
      id: "match_b1",
      groupName: "Grupo B",
      date: "Mañana · 2:00 p. m.",
      closeTime: "2026-06-18T14:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Suiza", flag: "🇨🇭", card: "MITICO-suiza.jpg" },
      away: { name: "Bosnia y Herzegovina", flag: "🇧🇦", card: "MITICO-bosnia.jpg" } // En tu repo mapeado como MITICO-bosnia.jpg
    },
    {
      id: "match_b2",
      groupName: "Grupo B",
      date: "Mañana · 5:00 p. m.",
      closeTime: "2026-06-18T17:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Canadá", flag: "🇨🇦", card: "MITICO-canada.jpg" },
      away: { name: "Catar", flag: "🇶🇦", card: "MITICO-catar.jpg" }
    }
  ]
};
