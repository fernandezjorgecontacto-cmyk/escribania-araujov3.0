import {
  ArrowRight,
  Home,
  Landmark,
  Scale,
  ScrollText,
  FileSignature,
  Stamp,
  Building2,
  Briefcase,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";

export function Services() {
  return (
    <section id="servicios" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end" data-reveal>
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10" style={{ background: "var(--gold)" }} />
              <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                Servicios
              </span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-ink lg:text-5xl">
              Trámites notariales
              <br />
              <span className="italic text-navy">con respaldo integral.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Cubrimos la totalidad del ejercicio notarial: desde la compraventa de un inmueble
            hasta la constitución de sociedades y protocolizaciones.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [Home, "Compraventas", "Escrituración de inmuebles con estudio de títulos completo."],
            [Landmark, "Hipotecas", "Constitución y cancelación de garantías reales."],
            [Scale, "Sucesiones", "Gestión integral de trámites sucesorios."],
            [ScrollText, "Testamentos", "Redacción y protocolización con máxima reserva."],
            [FileSignature, "Poderes", "Generales, especiales y para el extranjero."],
            [Stamp, "Certificaciones", "Firmas, fotocopias, existencia y supervivencia."],
            [Building2, "Constitución de sociedades", "SA, SRL, SAS y modificaciones estatutarias."],
            [Briefcase, "Contratos", "Redacción y asesoramiento contractual."],
            [BookOpen, "Protocolizaciones", "Incorporación de documentos al protocolo."],
            [Users, "Asesoramiento notarial", "Consultas previas y planificación patrimonial."],
            [Sparkles, "Otros trámites", "Consulte por gestiones fuera de esta lista."],
          ].map(([Icon, title, desc], i) => (
            <a
              key={title as string}
              href="#contacto"
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_25px_60px_-25px_oklch(0.24_0.05_258_/_0.3)]"
            >
              <span
                className="absolute inset-y-0 left-0 w-0.5 scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                style={{ background: "var(--gold)", transformOrigin: "top" }}
              />
              <div className="mb-5 flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-sm bg-navy/5 text-navy transition-all group-hover:bg-navy group-hover:text-[oklch(0.72_0.11_82)]">
                  
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-navy" />
              </div>
              <h3 className="font-serif text-xl text-ink">{title as string}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc as string}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
