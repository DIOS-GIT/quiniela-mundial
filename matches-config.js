// CONFIGURACIÓN PARA EL CIERRE DEL MUNDIAL: TERCER LUGAR Y GRAN FINAL
const GROUPS = {
  "Grupo Fase Final": [ // <-- AGREGADO "Grupo" al inicio para que coincida con tu botón
    {
      id: "2026_3er_fr_in",
      groupName: "Tercer Lugar",
      date: "Sáb, 18/7 · 4:00 p. m.",
      closeTime: "2026-07-18T16:00:00-05:00", // Hora Colombia
      cardsInPlay: 2,
      home: { name: "Francia", flag: "🇫🇷", card: "MITICO-francia.jpg" },
      away: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", card: "MITICO-inglaterra.jpg" }
    },
    {
      id: "2026_final_es_ar",
      groupName: "Gran Final",
      date: "Dom, 19/7 · 2:00 p. m.",
      closeTime: "2026-07-19T14:00:00-05:00", // Hora Colombia
      cardsInPlay: 2,
      home: { name: "España", flag: "🇪🇸", card: "MITICO-espana.jpg" },
      away: { name: "Argentina", flag: "🇦🇷", card: "MITICO-argentina.jpg" }
    }
  ]
};
