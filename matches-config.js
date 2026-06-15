// matches-config.js
// CONFIGURACIÓN DE LOS 4 PARTIDOS DE MAÑANA (15 DE JUNIO) SEGÚN TU CARTELERA

const GROUPS = {
  "G": [
    {
      id: "match_g1",
      groupName: "Grupo G",
      date: "Mañana · 2:00 p. m.",
      closeTime: "2026-06-15T14:00:00-05:00", // Cierre automático hora Colombia
      cardsInPlay: 2,
      home: { name: "Bélgica", flag: "🇧🇪", card: "MITICO-belgica.jpg" },
      away: { name: "Egipto", flag: "🇪🇬", card: "MITICO-egipto.jpg" }
    },
    {
      id: "match_g2",
      groupName: "Grupo G",
      date: "Mañana · 8:00 p. m.",
      closeTime: "2026-06-15T20:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Irán", flag: "🇮🇷", card: "MITICO-iran.jpg" },
      away: { name: "Nueva Zelanda", flag: "🇳🇿", card: "MITICO-nuevazelanda.jpg" }
    }
  ],
  "H": [
    {
      id: "match_h1",
      groupName: "Grupo H",
      date: "Mañana · 11:00 a. m.",
      closeTime: "2026-06-15T11:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "España", flag: "🇪🇸", card: "MITICO-espana.jpg" },
      away: { name: "Cabo Verde", flag: "🇨🇻", card: "MITICO-caboverde.jpg" }
    },
    {
      id: "match_h2",
      groupName: "Grupo H",
      date: "Mañana · 5:00 p. m.",
      closeTime: "2026-06-15T17:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Arabia Saudita", flag: "🇸🇦", card: "MITICO-arabia.jpg" },
      away: { name: "Uruguay", flag: "🇺🇾", card: "MITICO-uruguay.jpg" }
    }
  ]
};
