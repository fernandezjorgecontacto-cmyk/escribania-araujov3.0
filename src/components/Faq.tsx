import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-secondary/40"
      >
        <span className="font-serif text-lg text-ink">{q}</span>
        <ChevronDown
          className={`h-5 w-5 flex-none text-navy transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="grid overflow-hidden px-6 transition-all duration-500"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center" data-reveal>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Preguntas frecuentes
            </span>
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-serif text-4xl leading-tight text-ink lg:text-5xl">
            Todo lo que quiere saber antes de consultarnos.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-border rounded-sm border border-border bg-card">
          {[
            [
              "¿Qué documentación necesito?",
              "Depende del trámite. En una consulta inicial le indicaremos con exactitud los documentos requeridos y le enviaremos una lista personalizada.",
            ],
            [
              "¿Cuánto demora un trámite?",
              "Los plazos varían según la complejidad del acto. Trabajamos con calendarios claros y le informaremos la fecha estimada de firma desde el primer día.",
            ],
            [
              "¿Puedo hacer consultas antes de contratar?",
              "Sí. Ofrecemos una consulta previa sin compromiso para explicarle el procedimiento y despejar dudas.",
            ],
            [
              "¿Cómo coordino una reunión?",
              "Puede escribirnos por WhatsApp, correo o llamarnos. Le confirmaremos un horario dentro de las 24 horas.",
            ],
            [
              "¿Qué medios de pago aceptan?",
              "Aceptamos efectivo, transferencia bancaria y otros medios previamente acordados.",
            ],
          ].map(([q, a]) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
