import { WHATSAPP_URL } from "@/lib/constants";
import { MESSAGES, getWhatsAppUrl } from "@/lib/whatsapp";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-charcoal-900 text-cream-50">
      {/* Top CTA Strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10 py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-[28px] md:text-[36px] font-semibold leading-[0.95] tracking-[-0.02em] text-balance">
              Need foodstuff <span className="text-tangerine-400 italic font-normal">delivered</span> today?
            </h3>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.6] text-cream-100/70">
              Send your list on WhatsApp. We source, prepare, and deliver your bulk foodstuff and provisions conveniently.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-tangerine-500 px-8 text-[15px] font-medium text-white transition-all hover:bg-tangerine-600 hover:shadow-[0_12px_32px_rgba(255,107,24,0.32)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.26-1.38a9.806 9.806 0 0 0 4.69 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.87-6.99Zm-7.01 15.24h-.01a8.167 8.167 0 0 1-4.16-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.178 8.178 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.26 8.23Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z" fill="currentColor" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#home" className="inline-flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-cream-50 text-charcoal-900">
                <span className="font-display text-[20px] font-bold">D</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[18px] font-bold tracking-[-0.02em]">D-CONNECT</span>
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-cream-100/60">
                  Delivery Services
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-[1.7] text-cream-100/70 text-balance">
              Bulk foodstuff and provisions delivered to your doorstep. Convenient ordering via WhatsApp for Nigerian households who value quality and abundance.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] font-medium">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              Accepting orders via WhatsApp
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream-100/50">Navigate</h4>
              <ul className="mt-4 space-y-3 text-[14px]">
                <li><a href="#home" className="text-cream-100/80 hover:text-cream-50 transition-colors">Home</a></li>
                <li><a href="#products" className="text-cream-100/80 hover:text-cream-50 transition-colors">Products</a></li>
                <li><a href="#how-it-works" className="text-cream-100/80 hover:text-cream-50 transition-colors">How It Works</a></li>
                <li><a href="#about" className="text-cream-100/80 hover:text-cream-50 transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream-100/50">Categories</h4>
              <ul className="mt-4 space-y-3 text-[14px]">
                <li><a href="#products" className="text-cream-100/80 hover:text-cream-50 transition-colors">Rice & Grains</a></li>
                <li><a href="#products" className="text-cream-100/80 hover:text-cream-50 transition-colors">Garri & Cassava</a></li>
                <li><a href="#products" className="text-cream-100/80 hover:text-cream-50 transition-colors">Beans & Oils</a></li>
                <li><a href="#products" className="text-cream-100/80 hover:text-cream-50 transition-colors">Provisions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream-100/50">Contact</h4>
              <ul className="mt-4 space-y-3 text-[14px]">
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-cream-100/80 hover:text-cream-50 transition-colors">
                    WhatsApp: +234 814 740 0129
                  </a>
                </li>
                <li className="text-cream-100/60 text-[13px] leading-[1.5]">
                  Delivery availability via WhatsApp. Service areas confirmed on request.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] leading-[1.6] text-cream-100/50">
            © {year} D-Connect Delivery Services. Bulk foodstuff and provisions delivery. Nigerian food culture, delivered conveniently.
          </p>
          <div className="flex items-center gap-6 text-[11px] tracking-[0.06em] uppercase text-cream-100/40">
            <span>Premium Nigerian Brand</span>
            <span className="h-3 w-px bg-white/10" />
            <span>Built for Convenience</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tangerine-500/50 to-transparent" />
    </footer>
  );
}
