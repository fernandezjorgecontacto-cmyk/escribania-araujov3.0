import { MessageCircle, Mail, MapPin, ChevronDown, ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero-notary.jpg";
import { WHATSAPP_URL, EMAIL, MAPS_URL } from "@/lib/site-info";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Escribanía profesional — firma de escritura pública"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cream/85 via-white/55 to-cream/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.72_0.11_82_/_0.25)_0%,transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
        <div className="max-w-3xl" data-reveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span className="text-[15px] uppercase tracking-[0.35em] text-navy/80">
              Estudio Notarial & Jurídico ARAÚJO
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Seguridad jurídica
            <br />
            con{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              atención personalizada
            </span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/80">
            Cada trámite representa una decisión importante. Nuestro compromiso es brindarle
            asesoramiento claro, rapidez en la gestión y un acompañamiento profesional en cada
            etapa del proceso.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[oklch(0.62_0.16_150)] px-6 py-3.5 text-sm font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[oklch(0.56_0.17_150)] hover:shadow-xl"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
              <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-navy-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Mail className="h-4 w-4" style={{ color: "var(--gold)" }} />
              Enviar Email
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white/95 px-6 py-3.5 text-sm font-medium text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <MapPin className="h-4 w-4" />
              Cómo llegar
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {[
              "Atención personalizada",
              "Trámites ágiles",
              "Amplia experiencia",
              "Confidencialidad",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-xs text-ink/80 sm:text-sm">
                <span
                  className="grid h-5 w-5 flex-none place-items-center rounded-full"
                  style={{ background: "oklch(0.72 0.11 82 / .22)" }}
                >
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: "var(--gold)" }}
                  >
                    ✓
                  </span>
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#nosotros"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-navy/50 hover:text-navy lg:block"
        aria-label="Descubrir más"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
