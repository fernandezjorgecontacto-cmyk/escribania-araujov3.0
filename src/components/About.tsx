import notaryPortrait from "@/assets/fotomalcom.jpg";

export function About() {
  return (
    <section id="nosotros" className="relative py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative order-2 lg:order-1" data-reveal="left">
          <div
            className="absolute -left-4 -top-4 hidden h-full w-full rounded-sm lg:block"
            style={{ border: "1px solid var(--gold)", opacity: 0.5 }}
          />
          <img
            src={notaryPortrait}
            alt="Fotografía del escribano"
            className="relative w-full rounded-sm object-cover shadow-[0_30px_80px_-30px_oklch(0.24_0.05_258_/_0.35)]"
        />
        </div>
        <div className="order-1 flex flex-col justify-center lg:order-2" data-reveal="right">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Quiénes somos
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-ink lg:text-5xl">
            Una escribanía cercana,
            <br />
            <span className="italic text-navy">rigurosa y moderna.</span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Nuestra escribanía trabaja cada día con un objetivo muy claro: ofrecer un servicio
              profesional, cercano y eficiente para que cada cliente pueda resolver sus trámites
              con tranquilidad.
            </p>
            <p>
              Entendemos que detrás de cada documento existe una decisión importante. Por eso
              brindamos atención personalizada, explicamos cada paso del proceso y acompañamos a
              nuestros clientes hasta finalizar cada gestión.
            </p>
            <p>
              Nuestra sede se encuentra en La Barra, Punta del Este, y atendemos clientes en
              Maldonado, La Barra de Maldonado y Punta del Este. También trabajamos con
              extranjeros y gestionamos trámites para el resto de países.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["7", "Años de trayectoria"],
              ["4.9★", "Valoración clientes"],
              ["100%", "Confidencialidad"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-navy lg:text-4xl">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
