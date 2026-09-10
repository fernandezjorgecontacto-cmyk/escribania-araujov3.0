import {
  Landmark,
  Zap,
  Handshake,
  Lock,
  FileText,
  Users,
  CalendarClock,
  MapPin,
} from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="bg-secondary/60 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Por qué elegirnos
            </span>
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-serif text-4xl leading-tight text-ink lg:text-5xl">
            Los pilares de nuestro trabajo
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Landmark, "Profesionalismo", "Rigor técnico y ética en cada actuación notarial."],
            [Zap, "Rapidez", "Gestiones ágiles sin comprometer la precisión."],
            [Handshake, "Atención personalizada", "Escuchamos y explicamos cada paso."],
            [Lock, "Confidencialidad", "Discreción absoluta con su información."],
            [FileText, "Asesoramiento integral", "Acompañamiento antes, durante y después."],
            [Users, "Amplia cartera", "Clientes particulares, empresas e instituciones."],
            [CalendarClock, "Cumplimiento de plazos", "Respetamos su tiempo y sus fechas."],
            [MapPin, "Sede en La Barra", "Atención en Maldonado, La Barra y Punta del Este."],
          ].map(([Icon, title, desc], i) => (
            <div
              key={title as string}
              data-reveal="zoom"
              style={{ transitionDelay: `${i * 60}ms` }}
              className="group relative bg-background p-8 transition-all hover:bg-white"
            >
              <span
                className="absolute inset-x-8 top-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "var(--gold)" }}
              />
              <div
                className="mb-5 grid h-12 w-12 place-items-center rounded-sm bg-navy/5 transition-colors group-hover:bg-navy"
                style={{}}
              >
                
                <Icon
                  className="h-5 w-5 text-navy transition-colors group-hover:text-[oklch(0.72_0.11_82)]"
                />
              </div>
              <h3 className="font-serif text-lg text-ink">{title as string}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc as string}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
