// CONFIGURACIÓN CORREGIDA CON IDs ÚNICOS PARA HOY (24 DE JUNIO)
const GROUPS = {
  "A": [
    {
      id: "2026_a1_24_6", // Mantiene limpio el partido
      groupName: "Grupo A",
      date: "Hoy · 8:00 p. m.",
      closeTime: "2026-06-24T20:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Sudáfrica", flag: "🇿🇦", card: "MITICO-sudafrica.jpg" },
      away: { name: "Corea del Sur", flag: "🇰🇷", card: "MITICO-coreadelsur.jpg" }
    },
    {
      id: "2026_a2_24_6", // Asegura que Chequia vs México salga en 0-0
      groupName: "Grupo A",
      date: "Hoy · 8:00 p. m.",
      closeTime: "2026-06-24T20:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Chequia", flag: "🇨🇿", card: "MITICO-chequia.jpg" },
      away: { name: "México", flag: "🇲🇽", card: "MITICO-mexico.jpg" }
    }
  ],
  "B": [
    {
      id: "2026_b1_24_6", // <-- CAMBIADO: Soluciona el Suiza vs Canadá
      groupName: "Grupo B",
      date: "Hoy · 2:00 p. m.",
      closeTime: "2026-06-24T14:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Suiza", flag: "🇨🇭", card: "MITICO-suiza.jpg" },
      away: { name: "Canadá", flag: "🇨🇦", card: "MITICO-canada.jpg" }
    },
    {
      id: "2026_b2_24_6", // Mantiene limpio Bosnia vs Catar
      groupName: "Grupo B",
      date: "Hoy · 2:00 p. m.",
      closeTime: "2026-06-24T14:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Bosnia y Herzegovina", flag: "🇧🇦", card: "MITICO-bosniayherzegovina.jpg" },
      away: { name: "Catar", flag: "🇶🇦", card: "MITICO-catar.jpg" }
    }
  ],
  "C": [
    {
      id: "2026_c1_24_6", // <-- CAMBIADO: Soluciona Marruecos vs Haití
      groupName: "Grupo C",
      date: "Hoy · 5:00 p. m.",
      closeTime: "2026-06-24T17:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Marruecos", flag: "🇲🇦", card: "MITICO-marruecos.jpg" },
      away: { name: "Haití", flag: "🇭🇹", card: "MITICO-haiti.jpg" }
    },
{
      id: "2026_c2_24_6",
      groupName: "Grupo C",
      date: "Hoy · 5:00 p. m.",
      closeTime: "2026-06-24T17:00:00-05:00",
      cardsInPlay: 2,
      home: { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", card: "MITICO-escocia.jpg" }, // <-- Asegúrate de que la bandera sea solo el emoji limpio
      away: { name: "Brasil", flag: "🇧🇷", card: "MITICO-brasil.jpg" }
    }
  ]
};
