export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  source: "Google Maps" | "Instagram" | "Crítica Gastronómica";
  dishMentioned?: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Federico A.",
    role: "Vecino de Belgrano",
    content: "Sentarte en la barra de Pinuccio un mediodía mientras ves cómo estiran los tagliatelle al lado tuyo es una experiencia hermosa. El ragù de osobuco es sublime, de esos que te hacen acordar a los domingos en familia.",
    rating: 5,
    date: "Hace 2 semanas",
    source: "Google Maps",
    dishMentioned: "Tagliatelle al Ragù di Ossobuco",
  },
  {
    id: "rev-2",
    author: "Laura M. & Pietro",
    role: "Comensales regulares",
    content: "Sin pretensiones ni modas raras. Pinuccio es pura honestidad: harina buena, cocción al dente perfecta y una atención cálida. Los ravioles de zapallo con amaretti te transportan directo al norte de Italia.",
    rating: 5,
    date: "Hace 1 mes",
    source: "Google Maps",
    dishMentioned: "Ravioli di Zucca e Amaretti",
  },
  {
    id: "rev-3",
    author: "Ruta del Gusto BA",
    role: "Guía Gastronómica de Buenos Aires",
    content: "En medio de la ebullición del Mercado de Belgrano, Pinuccio destaca por mantener vivo el alma del pastificio artesanal. Es el lugar ideal para comer una pasta inolvidable y tomarse un vino en jarra sin apuros.",
    rating: 5,
    date: "Reciente",
    source: "Crítica Gastronómica",
    dishMentioned: "Vino della Casa & Tiramisù",
  },
];
