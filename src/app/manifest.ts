import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "D-Connect Delivery Services",
    short_name: "D-Connect",
    description:
      "Bulk foodstuff and provisions delivered to your doorstep. Order rice, garri, beans, oils, spices via WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFBF5",
    theme_color: "#0E3327",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
