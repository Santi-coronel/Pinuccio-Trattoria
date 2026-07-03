export interface MarketDetails {
  historyTitle: string;
  historyDescription: string;
  puestoNumber: string;
  atmosphereFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  neighborStalls: string[];
}

export const MARKET_DATA: MarketDetails = {
  historyTitle: "El Mercado de Belgrano: Patrimonio Vivo de Buenos Aires",
  historyDescription: "Inaugurado en 1889 en la intersección de Juramento y Ciudad de la Paz, el Mercado de Belgrano es un icono gastronómico del barrio. Entre sus pasillos de ladrillo y techos altos, Pinuccio ocupa el Puesto 23, aportando el aroma irremplazable del trigo y el tuco a fuego lento.",
  puestoNumber: "Puesto 23 — Pasillo Central",
  atmosphereFeatures: [
    {
      title: "La Barra Abierta",
      description: "Asientos altos frente a la cocina donde podés ver a los maestros pausteros estirar, cortar y hervir cada porción al instante.",
      icon: "ChefHat",
    },
    {
      title: "El Paseo Gastronómico",
      description: "Mesas compartidas de madera bajo la luz cálida del mercado para disfrutar con amigos, pareja o vecinos del barrio.",
      icon: "Utensils",
    },
    {
      title: "El Ritual del Vino",
      description: "Pingüinos y jarras tradicionales con vinos seleccionados para beber despacio mientras la charla fluye.",
      icon: "Wine",
    },
    {
      title: "Materia Prima de Proximidad",
      description: "Ingredientes frescos comprados cada mañana a los puestos vecinos de verduras, quesos y carnes del propio mercado.",
      icon: "Store",
    },
  ],
  neighborStalls: [
    "Frutería & Verdulería La Granja del Mercado",
    "Fiambrería y Quesería Italiana Don Carlo",
    "Carnicería de Corte Especial Belgrano",
    "Panadería de Masa Madre del Mercado",
  ],
};
