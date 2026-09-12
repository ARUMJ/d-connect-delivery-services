export const WHATSAPP_NUMBER = "2348147400129";
export const WHATSAPP_URL = "https://wa.me/2348147400129";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dconnectdelivery.com";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const CATEGORIES = [
  {
    id: "rice-grains",
    name: "Rice & Grains",
    description: "Premium long grain, local rice, and assorted grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
    accent: "bg-emerald-900",
  },
  {
    id: "garri-cassava",
    name: "Garri & Cassava",
    description: "Ijebu, Egba, white and yellow garri, cassava flour",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
    accent: "bg-cream-200",
  },
  {
    id: "beans",
    name: "Beans",
    description: "Honey beans, iron beans, white beans & more",
    image: "https://images.unsplash.com/photo-1583524505974-6facd53f4597?q=80&w=800&auto=format&fit=crop",
    accent: "bg-tangerine-50",
  },
  {
    id: "oils",
    name: "Oils",
    description: "Palm oil, groundnut oil, vegetable oils in bulk",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
    accent: "bg-emerald-50",
  },
  {
    id: "spices",
    name: "Spices",
    description: "Pepper, crayfish, seasoning, dried herbs",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    accent: "bg-tangerine-100",
  },
  {
    id: "provisions",
    name: "Provisions",
    description: "Indomie, milk, sugar, beverages, household essentials",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
    accent: "bg-cream-100",
  },
  {
    id: "other",
    name: "Other Foodstuff",
    description: "Yam, plantain, egusi, ogbono, and seasonal items",
    image: "https://images.unsplash.com/photo-1512621776952-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    accent: "bg-emerald-100",
  },
] as const;

export const FEATURED_PRODUCTS = [
  {
    id: "long-grain-rice",
    name: "Long Grain Rice",
    category: "Rice & Grains",
    description: "Premium quality, stone-free, perfect for everyday cooking",
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "garri-ijebu",
    name: "Garri Ijebu",
    category: "Garri & Cassava",
    description: "Crunchy, sour, finely textured - authentic Ijebu taste",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "honey-beans",
    name: "Honey Beans",
    category: "Beans",
    description: "Sweet, soft, and easy to cook - also known as Ewa Oloyin",
    image: "https://images.unsplash.com/photo-1583524505974-6facd53f4597?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "palm-oil",
    name: "Palm Oil",
    category: "Oils",
    description: "Pure, unadulterated, rich red palm oil from source",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "groundnut-oil",
    name: "Groundnut Oil",
    category: "Oils",
    description: "Clean, heart-friendly oil for frying and cooking",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "crayfish",
    name: "Dried Crayfish",
    category: "Spices",
    description: "Aromatic, clean-picked, essential for Nigerian soups",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "egusi",
    name: "Egusi Seeds",
    category: "Other Foodstuff",
    description: "Hand-picked melon seeds, ready for your soup",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "provisions-pack",
    name: "Provisions Pack",
    category: "Provisions",
    description: "Curated household essentials - customizable to your needs",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
  },
] as const;

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
