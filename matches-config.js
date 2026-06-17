// CONFIGURACIÓN DE LOS 4 PARTIDOS DE HOY (17 DE JUNIO) - GRUPOS K Y L

const GROUPS = {
  "K": [
    {
      id: "match_k1",
      groupName: "Grupo K",
      date: "Hoy · 12:00 p. m.",
      closeTime: "2026-06-17T12:00:00-05:00", // Cierre automático hora Colombia
      cardsInPlay: 2,
      home: { name: "Portugal", flag: "🇵🇹", card: "portugal" },
      away: { name: "RD Congo", flag: "🇨🇩", card: "rd congo" }
    },
    {
      id: "match_k2",
      groupName: "Grupo K",
      date: "Hoy · 9:00 p. m.",
      closeTime: "2026-06-17T21:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Uzbekistán", flag: "🇺🇿", card: "uzbekistan" },
      away: { name: "Colombia", flag: "🇨🇴", card: "colombia" }
    }
  ],
  "L": [
    {
      id: "match_l1",
      groupName: "Grupo L",
      date: "Hoy · 3:00 p. m.",
      closeTime: "2026-06-17T15:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", card: "inglaterra" },
      away: { name: "Croacia", flag: "🇭🇷", card: "croacia" }
    },
    {
      id: "match_l2",
      groupName: "Grupo L",
      date: "Hoy · 6:00 p. m.",
      closeTime: "2026-06-17T18:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Ghana", flag: "🇬🇭", card: "ghana" },
      away: { name: "Panamá", flag: "🇵🇦", card: "panama" }
    }
  ]
};
