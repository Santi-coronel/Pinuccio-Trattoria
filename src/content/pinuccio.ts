export interface PinuccioInfo {
  name: string;
  subtitle: string;
  tagline: string;
  marketName: string;
  address: string;
  stallNumber: string;
  city: string;
  country: string;
  googleMapsUrl: string;
  instagramUrl: string;
  openingHours: {
    days: string;
    lunch: string;
    dinner: string;
    notes: string;
  };
  contact: {
    whatsapp: string;
    formattedPhone: string;
  };
  images: {
    hero: string;
    manifesto: string;
    mercado: string;
    wine: string;
  };
  manifesto: {
    headline: string;
    bodyParagraphs: string[];
    quote: {
      text: string;
      author: string;
    };
  };
}

export const PINUCCIO_DATA: PinuccioInfo = {
  name: "Pinuccio",
  subtitle: "Trattoria e Pastificio",
  tagline: "Pasta fresca e mani italiane nel Mercado de Belgrano",
  marketName: "Mercado de Belgrano",
  address: "Juramento 2527, Puesto 23",
  stallNumber: "Puesto 23",
  city: "Buenos Aires",
  country: "Argentina",
  googleMapsUrl: "https://maps.app.goo.gl/Hsz8pGPrS8CxKtdT6",
  instagramUrl: "https://www.instagram.com/pinucciobelgrano",
  openingHours: {
    days: "Martes a Domingo",
    lunch: "12:00 hs — 16:30 hs",
    dinner: "20:00 hs — 23:30 hs",
    notes: "Lunes cerrado por descanso y amasado de masa madre.",
  },
  contact: {
    whatsapp: "5491134567890",
    formattedPhone: "+54 9 11 3456-7890",
  },
  images: {
    hero: "/images/hero.webp",
    manifesto: "/images/manifesto/masa.webp",
    mercado: "/images/gallery/mercado.webp",
    wine: "/images/gallery/wine.webp",
  },
  manifesto: {
    headline: "No inventamos la pasta. Honramos el tiempo de la harina.",
    bodyParagraphs: [
      "En el corazón del Mercado de Belgrano, Pinuccio nació sin pretensiones ni manteles blancos. Nacimos en la barra de madera, con el ruido de las ollas hirviendo y el aroma a tuco cocinado despacio desde la madrugada.",
      "Aquí la pasta no se congela ni se industrializa. Usamos sémola de trigo candeal seleccionada, yemas de campo de tono cobrizo intenso y el trabajo paciente de las manos que estiran la masa cada mañana frente a la mirada de los vecinos del barrio.",
      "Pinuccio es el encuentro entre el espíritu de la trattoria de pueblo italiana y el pulso vibrante del mercado porteño. Vino en jarra, pan crocante para hacer 'scarpetta' y conversaciones largas alrededor de un plato humeante.",
    ],
    quote: {
      text: "La buena pasta no necesita adornos artificiosos. Necesita buena harina, agua pura, fuego constante y memoria de la nonna.",
      author: "Pinuccio Belgrano",
    },
  },
};

export const getWhatsAppReservationUrl = (dishName?: string) => {
  const text = dishName
    ? `Hola Pinuccio! Quisiera consultar disponibilidad para reservar en el Mercado de Belgrano (Interés en: ${dishName}).`
    : `Hola Pinuccio! Quisiera consultar disponibilidad para hacer una reserva en el Puesto 23 del Mercado de Belgrano.`;
  return `https://wa.me/${PINUCCIO_DATA.contact.whatsapp}?text=${encodeURIComponent(text)}`;
};
