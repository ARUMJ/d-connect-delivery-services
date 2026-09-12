import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { getWhatsAppUrl, MESSAGES } from "@/lib/whatsapp";
import Image from "next/image";

export function DeliverySection() {
  return (
    <Section className="bg-cream-100">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[24px] bg-emerald-900 aspect-[4/3] md:aspect-[5/4] md:rounded-[28px] lg:rounded-[32px]">
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop"
                alt="Delivery person with foodstuff packages - doorstep delivery concept"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-900/15 to-transparent" />

              {/* Overlay card - refined */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 md:bottom-5 md:left-5 md:right-5">
                <div className="rounded-[14px] bg-cream-50/95 p-3.5 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-white/20 md:rounded-2xl md:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-full bg-emerald-900 text-cream-50 shadow-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-charcoal-500">Delivery</p>
                      <p className="font-display text-[14px] font-semibold text-charcoal-900 md:text-[15px]">To your location</p>
                    </div>
                    <div className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10.5px] font-medium text-emerald-800 border border-emerald-100 md:flex">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Via WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-tangerine-500" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tangerine-600">Delivery</span>
            </div>
            <h2 className="font-display text-[32px] font-semibold leading-[0.95] tracking-[-0.03em] text-charcoal-900 text-balance sm:text-[36px] md:text-[44px] lg:text-[46px]">
              Foodstuff delivered
              <br />
              <span className="italic font-normal text-emerald-800">to your location.</span>
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.65] text-charcoal-600 text-balance md:mt-5 md:text-[16px]">
              We keep delivery simple and transparent. No invented service areas — just send your location on WhatsApp and we confirm availability. Bulk-friendly, careful handling, doorstep convenience.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-8">
              <div className="rounded-[14px] bg-white border border-charcoal-900/[0.06] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                <p className="text-[12.5px] font-semibold text-charcoal-900">How to check</p>
                <p className="mt-1 text-[12.5px] leading-[1.5] text-charcoal-600">
                  Send your address or area via WhatsApp. We reply with confirmation and timing.
                </p>
              </div>
              <div className="rounded-[14px] bg-white border border-charcoal-900/[0.06] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                <p className="text-[12.5px] font-semibold text-charcoal-900">What we deliver</p>
                <p className="mt-1 text-[12.5px] leading-[1.5] text-charcoal-600">
                  Bulk foodstuff, groceries, provisions — sourced and prepared with care.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a
                href={getWhatsAppUrl(MESSAGES.deliveryCheck)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-emerald-900 px-7 text-[14px] font-medium text-cream-50 shadow-[0_4px_16px_rgba(14,51,39,0.18)] transition-all hover:bg-emerald-800 hover:shadow-[0_6px_20px_rgba(14,51,39,0.22)] md:h-[50px] md:px-8 md:text-[14.5px]"
              >
                Check Delivery Availability
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={getWhatsAppUrl(MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-charcoal-900/10 bg-white px-7 text-[14px] font-medium text-charcoal-900 transition-all hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 md:h-[50px] md:px-8 md:text-[14.5px]"
              >
                Order on WhatsApp
              </a>
            </div>

            <p className="mt-5 text-[11px] leading-[1.5] text-charcoal-500 md:text-[11.5px]">
              Service areas are not listed here until verified. All delivery confirmations happen via WhatsApp to keep information accurate.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function FinalCTA() {
  return (
    <Section className="bg-white !py-12 md:!py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[24px] bg-charcoal-900 px-6 py-10 md:rounded-[32px] md:px-10 md:py-14 lg:px-14 lg:py-16">
          {/* Background gradients - more subtle */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-tangerine-500/15 blur-[70px]" />
            <div className="absolute -left-20 bottom-0 h-[280px] w-[280px] rounded-full bg-emerald-500/15 blur-[60px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
          </div>

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display text-[28px] font-semibold leading-[0.95] tracking-[-0.03em] text-cream-50 text-balance sm:text-[32px] md:text-[40px] lg:text-[44px]">
                Ready to order your
                <br />
                <span className="italic font-normal text-tangerine-300">foodstuff in bulk?</span>
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-[1.6] text-cream-100/65 md:mt-4 md:text-[15px]">
                Send your list on WhatsApp. D-Connect sources, prepares, and delivers your foodstuff and provisions conveniently to your doorstep.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <a
                href={getWhatsAppUrl(MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-tangerine-500 px-8 text-[15px] font-[600] text-white shadow-[0_8px_24px_rgba(255,107,24,0.3)] transition-all hover:bg-tangerine-600 hover:shadow-[0_12px_32px_rgba(255,107,24,0.35)] md:h-[54px] lg:w-auto"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.26-1.38a9.806 9.806 0 0 0 4.69 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.87-6.99Zm-7.01 15.24h-.01a8.167 8.167 0 0 1-4.16-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.178 8.178 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.26 8.23Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z"
                    fill="currentColor"
                  />
                </svg>
                Order on WhatsApp
              </a>
              <p className="text-center text-[11px] tracking-[0.02em] text-cream-100/45 lg:text-right">
                Fast response • Bulk-friendly • No app needed
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
