export const WHATSAPP_NUMBER = "2348147400129";
export const WHATSAPP_URL = "https://wa.me/2348147400129";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dconnectdelivery.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const CATEGORIES = [
  {
    id: "rice-grains",
    slug: "rice-grains",
    name: "Rice & Grains",
    description: "Premium long grain, local rice, and assorted grains",
    image: "/images/categories/rice-grains.jpg",
    accent: "bg-emerald-900",
  },
  {
    id: "garri-cassava",
    slug: "garri-cassava",
    name: "Garri & Cassava",
    description: "Ijebu, Egba, white and yellow garri, cassava flour",
    image: "/images/categories/garri-cassava.jpg",
    accent: "bg-cream-200",
  },
  {
    id: "beans",
    slug: "beans",
    name: "Beans",
    description: "Honey beans, iron beans, white beans & more",
    image: "/images/categories/beans.jpg",
    accent: "bg-tangerine-50",
  },
  {
    id: "oils",
    slug: "oils",
    name: "Oils",
    description: "Palm oil, groundnut oil, vegetable oils in bulk",
    image: "/images/categories/oils.jpg",
    accent: "bg-emerald-50",
  },
  {
    id: "spices",
    slug: "spices",
    name: "Spices",
    description: "Pepper, crayfish, seasoning, dried herbs",
    image: "/images/categories/spices.jpg",
    accent: "bg-tangerine-100",
  },
  {
    id: "provisions",
    slug: "provisions",
    name: "Provisions",
    description: "Indomie, milk, sugar, beverages, household essentials",
    image: "/images/categories/provisions.jpg",
    accent: "bg-cream-100",
  },
  {
    id: "other",
    slug: "other-foodstuff",
    name: "Other Foodstuff",
    description: "Yam, plantain, egusi, ogbono, and seasonal items",
    image: "/images/categories/other-foodstuff.jpg",
    accent: "bg-emerald-100",
  },
];

export const FEATURED_PRODUCTS = [
  {
    id: "long-grain-rice",
    slug: "long-grain-rice",
    name: "Long Grain Rice",
    category: "Rice & Grains",
    categorySlug: "rice-grains",
    description: "Premium quality, stone-free, perfect for everyday cooking",
    longDescription:
      "Premium long grain rice, carefully sourced and stone-free. Ideal for everyday Nigerian cooking — from jollof to white rice and stew. Available in bulk quantities for household stocking.",
    image: "/images/products/long-grain-rice.jpg",
  },
  {
    id: "garri-ijebu",
    slug: "garri-ijebu",
    name: "Garri Ijebu",
    category: "Garri & Cassava",
    categorySlug: "garri-cassava",
    description: "Crunchy, sour, finely textured - authentic Ijebu taste",
    longDescription:
      "Authentic Garri Ijebu — crunchy, sour, and finely textured. A staple for soaking and eba, sourced with quality checks. Available in different textures and quantities.",
    image: "/images/products/garri-ijebu.jpg",
  },
  {
    id: "honey-beans",
    slug: "honey-beans",
    name: "Honey Beans",
    category: "Beans",
    categorySlug: "beans",
    description: "Sweet, soft, and easy to cook - also known as Ewa Oloyin",
    longDescription:
      "Sweet honey beans (Ewa Oloyin) — soft, sweet, and easy to cook. Perfect for adalu, ewa agoyin, or beans and plantain. Bulk-friendly for household stocking.",
    image: "/images/products/honey-beans.jpg",
  },
  {
    id: "palm-oil",
    slug: "palm-oil",
    name: "Palm Oil",
    category: "Oils",
    categorySlug: "oils",
    description: "Pure, unadulterated, rich red palm oil from source",
    longDescription:
      "Pure, unadulterated red palm oil, rich in color and flavor. Sourced directly, ideal for soups, stews, and traditional dishes. Available in various volumes.",
    image: "/images/products/palm-oil.jpg",
  },
  {
    id: "groundnut-oil",
    slug: "groundnut-oil",
    name: "Groundnut Oil",
    category: "Oils",
    categorySlug: "oils",
    description: "Clean, heart-friendly oil for frying and cooking",
    longDescription:
      "Clean groundnut oil — heart-friendly, clear, and perfect for frying and everyday cooking. Carefully handled and packaged for household use.",
    image: "/images/products/groundnut-oil.jpg",
  },
  {
    id: "crayfish",
    slug: "dried-crayfish",
    name: "Dried Crayfish",
    category: "Spices",
    categorySlug: "spices",
    description: "Aromatic, clean-picked, essential for Nigerian soups",
    longDescription:
      "Aromatic dried crayfish, clean-picked and essential for Nigerian soups and stews. Adds depth and umami to egusi, ogbono, and native soups.",
    image: "/images/products/crayfish.jpg",
  },
  {
    id: "egusi",
    slug: "egusi-seeds",
    name: "Egusi Seeds",
    category: "Other Foodstuff",
    categorySlug: "other-foodstuff",
    description: "Hand-picked melon seeds, ready for your soup",
    longDescription:
      "Hand-picked egusi (melon) seeds, ready for grinding into your favorite soup. Clean and quality-checked, perfect for egusi soup with assorted meats.",
    image: "/images/products/egusi.jpg",
  },
  {
    id: "provisions-pack",
    slug: "provisions-pack",
    name: "Provisions Pack",
    category: "Provisions",
    categorySlug: "provisions",
    description: "Curated household essentials - customizable to your needs",
    longDescription:
      "Curated provisions pack — Indomie, milk, sugar, beverages, and household essentials. Customizable to your household needs and available in bulk.",
    image: "/images/products/provisions-pack.jpg",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose what you need",
    description: "Browse the foodstuff and provisions you want. From bulk rice to daily essentials.",
  },
  {
    step: "02",
    title: "Send your order",
    description: "Send your request through WhatsApp. Quick, familiar, no complicated checkout.",
  },
  {
    step: "03",
    title: "We prepare it",
    description: "D-Connect sources and prepares your order with care and quality checks.",
  },
  {
    step: "04",
    title: "Get it delivered",
    description: "Your order is delivered to your location. Convenient and reliable.",
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "Convenient",
    description: "Order from home. No market stress, no carrying heavy bags.",
    icon: "clock",
  },
  {
    title: "Reliable",
    description: "Quality sourcing and careful handling from market to doorstep.",
    icon: "shield",
  },
  {
    title: "Bulk-Friendly",
    description: "Built for bulk household purchases. Stock up without hassle.",
    icon: "package",
  },
  {
    title: "Doorstep Delivery",
    description: "Foodstuff delivered directly to your location. Simple and straightforward.",
    icon: "truck",
  },
] as const;
