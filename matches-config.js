// CONFIGURACIÓN DE LOS 4 PARTIDOS DE MAÑANA (16 DE JUNIO) SEGÚN TU CARTELERA

const GROUPS = {
  "I": [
    {
      id: "match_i1",
      groupName: "Grupo I",
      date: "Mañana · 2:00 p. m.",
      closeTime: "2026-06-16T14:00:00-05:00", // Cierre automático hora Colombia
      cardsInPlay: 2,
      home: { name: "Francia", flag: "🇫🇷", card: "MITICO-francia.jpg" },
      away: { name: "Senegal", flag: "🇸🇳", card: "MITICO-senegal.jpg" }
    },
    {
      id: "match_i2",
      groupName: "Grupo I",
      date: "Mañana · 5:00 p. m.",
      closeTime: "2026-06-16T17:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Irak", flag: "🇮🇶", card: "MITICO-irak.jpg" },
      away: { name: "Noruega", flag: "🇳🇴", card: "MITICO-noruega.jpg" }
    }
  ],
  "J": [
    {
      id: "match_j1",
      groupName: "Grupo J",
      date: "Mañana · 8:00 p. m.",
      closeTime: "2026-06-16T20:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Argentina", flag: "🇦🇷", card: "MITICO-argentina.jpg" },
      away: { name: "Argelia", flag: "🇩🇿", card: "MITICO-argelia.jpg" }
    },
    {
      id: "match_j2",
      groupName: "Grupo J",
      date: "Mañana · 11:00 p. m.",
      closeTime: "2026-06-16T23:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Austria", flag: "🇦🇹", card: "MITICO-austria.jpg" },
      away: { name: "Jordania", flag: "🇯🇴", card: "MITICO-jordania.jpg" }
    }
  ]
};
