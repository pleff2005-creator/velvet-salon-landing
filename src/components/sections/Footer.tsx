import { navLinks, salon } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-16 text-bone">
      <div className="wrap">
        <div className="grid gap-9 border-b border-[rgba(245,242,239,.14)] pb-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
          <div>
            <a href="#top" className="mb-4 flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-wine" />
              <span className="font-display text-2xl tracking-[0.14em] text-paper">{salon.name}</span>
            </a>
            <p className="max-w-[38ch] text-[0.92rem] text-[rgba(245,242,239,.6)]">
              Салон красоты полного цикла в центре Москвы. Волосы, ногти, косметология, брови,
              макияж и SPA в одном пространстве.
            </p>
          </div>

          <div>
            <h4 className="mb-[18px] font-sans text-[0.78rem] uppercase tracking-[0.16em] text-[#d8a9b4]">Разделы</h4>
            {navLinks.slice(0, 5).map((l) => (
              <a key={l.href} href={l.href} className="mb-2.5 block text-[0.94rem] text-[rgba(245,242,239,.72)] transition-colors hover:text-paper">
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="mb-[18px] font-sans text-[0.78rem] uppercase tracking-[0.16em] text-[#d8a9b4]">Контакты</h4>
            <a href={salon.phoneHref} className="mb-2.5 block text-[0.94rem] text-[rgba(245,242,239,.72)] transition-colors hover:text-paper">
              {salon.phone}
            </a>
            <p className="mb-2.5 text-[0.94rem] text-[rgba(245,242,239,.72)]">{salon.address}</p>
            <p className="mb-2.5 text-[0.94rem] text-[rgba(245,242,239,.72)]">{salon.hours}</p>
            <a href="#contacts" className="mb-2.5 block text-[0.94rem] text-[rgba(245,242,239,.72)] transition-colors hover:text-paper">
              Записаться онлайн
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-6">
          <p className="text-[0.82rem] text-[rgba(245,242,239,.5)]">
            © 2026 Салон красоты {salon.name}. Демонстрационный проект.
          </p>
          <a href="#contacts" className="text-[0.82rem] text-[rgba(245,242,239,.5)] underline">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
