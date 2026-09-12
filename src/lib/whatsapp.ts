import { WHATSAPP_URL } from "./constants";

export function getWhatsAppUrl(message?: string) {
  if (!message) return WHATSAPP_URL;
  const encoded = encodeURIComponent(message);
  return `${WHATSAPP_URL}?text=${encoded}`;
}

export const MESSAGES = {
  general: "Hello D-Connect! I'd like to order some foodstuff and provisions.",
  deliveryCheck: "Hello D-Connect! I'd like to check if you deliver to my location.",
  browseProducts: "Hello D-Connect! I'd like to browse your available foodstuff and provisions.",
  category: (categoryName: string) =>
    `Hello D-Connect! I'm interested in ${categoryName}. What options do you have available?`,
  product: (productName: string) =>
    `Hello D-Connect! I'm interested in ${productName}. Please let me know about availability and how to order.`,
} as const;
