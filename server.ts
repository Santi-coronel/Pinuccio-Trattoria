import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI on server-side
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", restaurant: "Pinuccio Trattoria e Pastificio" });
});

// Sommelier & Menu Host AI Endpoint
app.post("/api/gemini/concierge", async (req, res) => {
  try {
    const { message, preference } = req.body;

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not set
      return res.json({
        reply: "Benvenuto a Pinuccio! Te sugerimos probar nuestras Tagliatelle al Ragù di Ossobuco acompañadas con una jarra de Malbec mendocino. Para reservas o consultas directas, te esperamos en el Puesto 23 del Mercado de Belgrano.",
        recommendation: {
          dish: "Tagliatelle al Ragù di Ossobuco",
          wine: "Malbec de Paraje Altamira en jarra",
          note: "Estofado braceado 8 horas con vino tinto y queso Parmigiano 24 meses.",
        },
      });
    }

    const systemInstruction = `
Eres el Sommelier y Anfitrión Virtual de PINUCCIO TRATTORIA E PASTIFICIO, ubicada en el Puesto 23 del histórico Mercado de Belgrano (Juramento 2527, Buenos Aires).
Tu personalidad es cálida, sabia, apasionada por la pasta hecha a mano, el vino de autor y la vida de mercado porteña. Hablas español con giros afectuosos italianos o argentinos de mercado ("Benvenuto", "Scarpetta", "Vecino", "Amico").

MENÚ DE PINUCCIO:
1. Tagliatelle al Ragù di Ossobuco ($14.500): Pasta de yema estirada a rodillo con osobuco braceado 8hs en Malbec.
2. Ravioli di Zucca e Amaretti ($13.800): Zapallo cabutia asado, mostarda di Cremona, amaretti crocantes y mantequilla de salvia.
3. Gnocchi della Nonna con Stracciatella ($13.200): Ñoquis livianos de papa Spunta, pomodoro y stracciatella fresca.
4. Tonnarelli Cacio e Pepe ($12.900): Pecorino Romano D.O.P. y pimienta negra tostada.
5. Burrata del Mercado ($11.500): Con tomates confitados, pesto de almendras y focaccia.
6. Tiramisù Classico ($6.800): Vainillas artesanales, café espresso, mascarpone y cacao 70%.
7. Vino de la Casa en Jarra ($7.500 / $12.000): Malbec o Cabernet Sauvignon de pequeños productores.

INSTRUCCIONES:
- Responde de forma concisa, poética y apetitosa (máximo 120 palabras).
- Recomienda un plato específico y su maridaje perfecto de vino o bebida según la consulta del cliente.
- Transmite calidez humana, el olor a tuco hirviendo y el ambiente único del Mercado de Belgrano.
`;

    const userPrompt = preference
      ? `Tengo preferencia por: ${preference}. Consulta: ${message || "Recomiéndame una experiencia de plato y vino."}`
      : message || "Recomiéndame el mejor plato para hoy.";

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "¡Benvenuto! Te invitamos a sentarte en la barra del Mercado de Belgrano y probar nuestras pastas frescas recién amadas.";

    res.json({
      reply: replyText,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in /api/gemini/concierge:", error);
    res.status(500).json({
      error: "Error interno procesando la consulta.",
      reply: "En Pinuccio siempre hay un plato de tagliatelle al ragù esperándote en el Mercado de Belgrano. Vení a la barra y charlamos en persona.",
    });
  }
});

// Interactive Reservation & WhatsApp Inquiry Endpoint
app.post("/api/reservation", (req, res) => {
  const { name, phone, date, time, partySize, seating, notes } = req.body;

  const formattedWhatsAppMsg = encodeURIComponent(
    `Hola Pinuccio! Quisiera reservar/consultar mesa:\n` +
      `👤 Nombre: ${name}\n` +
      `📅 Fecha: ${date}\n` +
      `⏰ Hora: ${time}\n` +
      `👥 Personas: ${partySize}\n` +
      `📍 Ubicación deseada: ${seating || "Barra del Mercado"}\n` +
      (notes ? `📝 Notas: ${notes}\n` : "") +
      `Gracias!`
  );

  const whatsappUrl = `https://wa.me/5491134567890?text=${formattedWhatsAppMsg}`;

  res.json({
    status: "success",
    message: "Solicitud generada con éxito.",
    reservationDetails: {
      name,
      date,
      time,
      partySize,
      seating: seating || "Barra del Mercado (Vista a la cocina)",
      whatsappUrl,
    },
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Pinuccio Trattoria Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
