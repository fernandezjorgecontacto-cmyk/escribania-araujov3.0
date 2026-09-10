import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { WHATSAPP_URL, PHONE, EMAIL, ADDRESS, MAPS_QUERY, MAPS_URL } from "@/lib/site-info";

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-navy"
      />
    </div>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="bg-secondary/60 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Contacto
            </span>
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-serif text-4xl leading-tight text-ink lg:text-5xl">
            Estamos para asesorarlo.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escríbanos por el canal que prefiera. Le responderemos a la brevedad.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Info & Mapa */}
          <div className="space-y-6" data-reveal="left">
            <div className="rounded-sm border border-border bg-background p-8">
              <h3 className="font-serif text-xl text-ink">Datos de contacto</h3>
              <div className="mt-6 space-y-4 text-sm">
                {(
                  [
                    [MapPin, ADDRESS, MAPS_URL],
                    [Phone, PHONE, `tel:${PHONE.replace(/\s/g, "")}`],
                    [Mail, EMAIL, `mailto:${EMAIL}`],
                    [MessageCircle, "WhatsApp directo", WHATSAPP_URL],
                    [Clock, "Lun a Vie · 09:30 – 18:30", null],
                  ] as [React.ElementType, string, string | null][]
                ).map(([Icon, text, href]) => (
                  <div key={text as string} className="flex items-center gap-4">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-sm bg-navy/5 text-navy">
                      <Icon className="h-4 w-4" />
                    </span>
                    {href ? (
                      <a
                        href={href as string}
                        target={href === WHATSAPP_URL || href === MAPS_URL ? "_blank" : undefined}
                        rel={href === WHATSAPP_URL || href === MAPS_URL ? "noreferrer" : undefined}
                        className="text-foreground transition-colors hover:text-navy"
                      >
                        {text as string}
                      </a>
                    ) : (
                      <span className="text-foreground">{text as string}</span>
                    )}
                  </div>
                ))}
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm text-navy-foreground transition-all hover:-translate-y-0.5"
              >
                <MapPin className="h-4 w-4" style={{ color: "var(--gold)" }} />
                Cómo llegar
              </a>
            </div>
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Ubicación de la escribanía"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[0.3]"
              />
            </div>
          </div>

          {/* Formulario */}
          <form
            data-reveal="right"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              if (!form.checkValidity()) {
                form.reportValidity();
                return;
              }
              const fd = new FormData(form);
              const body = `Nombre: ${fd.get("nombre")} ${fd.get("apellido")}%0D%0ATeléfono: ${fd.get(
                "telefono",
              )}%0D%0AEmail: ${fd.get("email")}%0D%0ATrámite: ${fd.get(
                "tramite",
              )}%0D%0A%0D%0A${fd.get("mensaje")}`;
              window.location.href = `mailto:${EMAIL}?subject=Consulta%20desde%20la%20web&body=${body}`;
              toast.success("Se abrió tu cliente de correo para enviar la consulta.");
            }}
            className="rounded-sm border border-border bg-background p-8"
          >
            <h3 className="font-serif text-xl text-ink">Solicitar consulta</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Complete el formulario y le responderemos dentro de las 24 hs.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field name="nombre" label="Nombre" required />
              <Field name="apellido" label="Apellido" required />
              <Field name="telefono" label="Teléfono" type="tel" />
              <Field name="email" label="Correo" type="email" required />
              <div className="sm:col-span-2">
                <label
                  htmlFor="field-tramite"
                  className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Tipo de trámite
                </label>
                <select
                  id="field-tramite"
                  name="tramite"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-navy"
                >
                  {[
                    "Consulta general",
                    "Compraventa",
                    "Hipoteca",
                    "Sucesión",
                    "Testamento",
                    "Poder",
                    "Certificación",
                    "Constitución de sociedad",
                    "Contrato",
                    "Otro",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="field-mensaje"
                  className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="field-mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-navy"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-navy-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            >
              Solicitar consulta
              <ArrowRight className="h-4 w-4" style={{ color: "var(--gold)" }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
