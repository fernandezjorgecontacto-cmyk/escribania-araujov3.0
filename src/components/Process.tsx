export function Process() {
  return (
    <>
      {/* Compromiso */}
      <section className="relative overflow-hidden bg-navy py-28 lg:py-36">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.72 0.11 82) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10" data-reveal>
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">
              Nuestro compromiso
            </span>
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-serif text-4xl leading-tight text-white lg:text-6xl">
            Más que un trámite,
            <br />
            <span className="italic" style={{ color: "var(--gold)" }}>
              una relación de confianza.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            Trabajamos para que cada cliente reciba una atención clara, eficiente y profesional.
            Valoramos el tiempo de quienes nos eligen y nos esforzamos por brindar soluciones
            ágiles, con el respaldo y la seguridad jurídica que cada situación requiere.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10" style={{ background: "var(--gold)" }} />
              <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                Proceso de trabajo
              </span>
              <span className="h-px w-10" style={{ background: "var(--gold)" }} />
            </div>
            <h2 className="font-serif text-4xl leading-tight text-ink lg:text-5xl">
              Un método claro, de principio a fin.
            </h2>
          </div>

          <div className="relative mt-20">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border lg:left-1/2 lg:-translate-x-1/2" />
            {[
              ["Contacto", "El cliente se comunica por WhatsApp, teléfono o correo."],
              ["Asesoramiento", "Analizamos el caso y explicamos el procedimiento."],
              ["Gestión", "Realizamos toda la documentación necesaria."],
              ["Firma", "Coordinamos la firma y entrega de la documentación."],
              ["Seguimiento", "Respondemos cualquier consulta posterior."],
            ].map(([title, desc], i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={title}
                  data-reveal={left ? "left" : "right"}
                  className={`relative mb-12 flex items-start gap-6 lg:mb-14 lg:w-1/2 lg:gap-10 ${
                    left ? "lg:pr-14" : "lg:ml-auto lg:pl-14"
                  }`}
                >
                  <div className="absolute left-8 -translate-x-1/2 lg:left-auto lg:right-auto lg:top-2 lg:h-4 lg:w-4">
                    <span
                      className={`relative z-10 grid h-16 w-16 place-items-center rounded-full bg-navy font-serif text-lg text-white shadow-lg lg:absolute lg:h-4 lg:w-4 lg:text-0 ${
                        left ? "lg:-right-14 lg:top-2" : "lg:-left-14 lg:top-2"
                      }`}
                      style={{ boxShadow: "0 0 0 6px var(--background), 0 0 0 7px var(--border)" }}
                    >
                      <span className="lg:hidden">{i + 1}</span>
                    </span>
                  </div>
                  <div className="ml-24 lg:ml-0">
                    <div className="mb-1 font-serif text-sm" style={{ color: "var(--gold)" }}>
                      Paso 0{i + 1}
                    </div>
                    <h3 className="font-serif text-2xl text-ink">{title}</h3>
                    <p className="mt-2 text-muted-foreground">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
