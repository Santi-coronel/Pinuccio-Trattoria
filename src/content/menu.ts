export interface MenuItem {
  id: string;
  name: string;
  italianName: string;
  category: "paste" | "antipasti" | "dolci" | "bevande";
  price: string;
  description: string;
  ingredients: string[];
  pairing: string;
  highlighted?: boolean;
  image: string;
  notes?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "tagliatelle-ossobuco",
    name: "Tagliatelle al Ragù di Ossobuco",
    italianName: "Tagliatelle con Estofado de Osobuco",
    category: "paste",
    price: "$14.500",
    description: "Pasta de yema estirada a rodillo, acompañada con osobuco braceado durante 8 horas en vino tinto Malbec, tomate San Marzano y romero fresco.",
    ingredients: ["Sémola de trigo candeal", "Yema de huevo de campo", "Osobuco braceado 8hs", "Tomate San Marzano", "Vino Malbec", "Parmigiano Reggiano 24 meses"],
    pairing: "Malbec de Paraje Altamira en jarra de vidrio",
    highlighted: true,
    image: "/images/menu/tagliatelle.webp",
    notes: "Plato insignia de Pinuccio. Se sugiere pedir pan de masa madre extra para hacer scarpetta.",
  },
  {
    id: "ravioli-zucca",
    name: "Ravioli di Zucca e Amaretti",
    italianName: "Ravioles de Zapallo Cabutia y Amaretti",
    category: "paste",
    price: "$13.800",
    description: "Ravioles artesanales rellenos de zapallo cabutia asado al horno de barro, mostarda di Cremona, amaretti crocantes y nuez moscada en mantequilla salvia.",
    ingredients: ["Masa fina de huevo", "Zapallo cabutia asado", "Amaretti artesanal", "Manteca de campo", "Salvia fresca", "Queso Pecorino romano"],
    pairing: "Chardonnay del Valle de Uco con paso por madera",
    highlighted: true,
    image: "/images/menu/ravioli.webp",
    notes: "Receta tradicional de Mantova adaptada con zapallos locales de la huerta del mercado.",
  },
  {
    id: "gnocchi-stracciatella",
    name: "Gnocchi della Nonna con Stracciatella",
    italianName: "Ñoquis de Papa con Pomodoro y Stracciatella Fresca",
    category: "paste",
    price: "$13.200",
    description: "Ñoquis livianos de papa Spunta hervida en su piel, pomodoro italiano caramelizado, albahaca de la verdulería del mercado y núcleo cremoso de stracciatella.",
    ingredients: ["Papa Spunta seleccionada", "Harina 0000", "Pomodoro pelati", "Stracciatella de crema de leche", "Albahaca genovesa", "Aceite de oliva virgen extra"],
    pairing: "Sangiovese joven servido fresco",
    highlighted: false,
    image: "/images/hero.webp",
  },
  {
    id: "cacio-e-pepe",
    name: "Tonnarelli Cacio e Pepe in Crosta",
    italianName: "Tonnarelli Cacio e Pepe Tradicional",
    category: "paste",
    price: "$12.900",
    description: "Pasta larga de sección cuadrada salteada en el agua de cocción con Pecorino Romano D.O.P. mantecado al momento y pimienta negra tostada en grano.",
    ingredients: ["Tonnarelli frescos", "Pecorino Romano D.O.P.", "Pimienta negra en grano tostada", "Emulsión de almidón natural"],
    pairing: "Pinot Noir patagónico",
    highlighted: false,
    image: "/images/menu/tagliatelle.webp",
  },
  {
    id: "burrata-mercado",
    name: "Burrata del Mercado con Pomodorini",
    italianName: "Burrata Artesanal con Tomates Asados",
    category: "antipasti",
    price: "$11.500",
    description: "Burrata entera de 250g con centro fluido de crema, acompañada de tomates perita confitados en oliva virgen extra, pesto de almendras y focaccia tibia.",
    ingredients: ["Burrata de masa hilada", "Tomates confitados", "Pesto genovés de almendras", "Focaccia de romero y sal marina"],
    pairing: "Aperol Spritz clásico con rodaja de naranja",
    highlighted: false,
    image: "/images/gallery/wine.webp",
  },
  {
    id: "tiramisu-classico",
    name: "Tiramisù Classico della Casata",
    italianName: "Tiramisú Tradicional de Café y Mascarpone",
    category: "dolci",
    price: "$6.800",
    description: "Vainillas artesanales embebidas en café espresso fuerte con toque de vino Marsala, cremoso de mascarpone fresco y lluvia abundante de cacao amargo 70%.",
    ingredients: ["Savoiardi artesanales", "Mascarpone fresco", "Café espresso de especialidad", "Vino Marsala italiano", "Cacao amargo puro"],
    pairing: "Espresso ristretto o copa de Grappa italiana",
    highlighted: true,
    image: "/images/menu/tiramisu.webp",
  },
  {
    id: "cannoli-siciliani",
    name: "Cannoli Siciliani con Pistacchio",
    italianName: "Cannoli Rellenos de Ricotta y Pistachos",
    category: "dolci",
    price: "$7.200",
    description: "Crocante tubo de masa frita aromatizada con marsala, frito en el momento y rellenado con crema de ricotta de oveja, naranja confitada y pistachos de San Juan.",
    ingredients: ["Masa crocante de cannolo", "Ricotta de oveja cremosa", "Cascaritas de naranja glaseadas", "Pistachos tostados picados"],
    pairing: "Limoncello casero bien frío",
    highlighted: false,
    image: "/images/menu/tiramisu.webp",
  },
  {
    id: "vino-jarra",
    name: "Vino de la Casa en Jarra de Cerámica",
    italianName: "Vino della Casa (500ml / 1 Litro)",
    category: "bevande",
    price: "$7.500 / $12.000",
    description: "Malbec o Cabernet Sauvignon de pequeños productores mendocinos seleccionado especialmente para maridar con la riqueza de nuestras pastas.",
    ingredients: ["Malbec / Cabernet Sauvignon sin filtrar"],
    pairing: "Cualquier plato de pasta con estofado o crema",
    highlighted: false,
    image: "/images/gallery/wine.webp",
  }
];
