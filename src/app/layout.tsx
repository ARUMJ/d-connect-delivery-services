import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dconnectdelivery.com";
const SITE_NAME = "D-Connect Delivery Services";
const TITLE = "D-Connect Delivery Services | Bulk Foodstuff & Provisions Delivered";
const DESCRIPTION =
  "Order bulk foodstuff, groceries and provisions delivered to your doorstep. D-Connect makes Nigerian foodstuff shopping convenient — rice, garri, beans, oils, spices and household provisions, ordered easily via WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "foodstuff delivery",
    "bulk foodstuff delivery",
    "provisions delivery",
    "Nigerian foodstuff delivery",
    "foodstuff ordering",
    "bulk groceries",
    "foodstuff and provisions",
    "foodstuff delivered",
    "D-Connect",
    "Nigerian groceries",
    "bulk foodstuff Nigeria",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D-Connect Delivery Services - Bulk Foodstuff & Provisions Delivered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
  category: "food delivery",
};

export const viewport: Viewport = {
  themeColor: "#0E3327",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        {/* Self-hosted premium font stacks with system fallbacks for offline builds */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        `}</style>
      </head>
      <body className="min-h-full flex flex-col bg-cream-50 text-charcoal-900 selection:bg-tangerine-500 selection:text-white">
        {children}

        {/* Organization Structured Data - factual only */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "D-Connect Delivery Services",
              url: SITE_URL,
              description: DESCRIPTION,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
