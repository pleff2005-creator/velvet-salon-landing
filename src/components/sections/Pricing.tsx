"use client";

import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import { priceGroups } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [active, setActive] = useState(priceGroups[0].id);

  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (priceGroups.some((g) => g.id === id)) setActive(id);
    };
    window.addEventListener("select-price", onSelect);
    return () => window.removeEventListener("select-price", onSelect);
  }, []);

  const group = priceGroups.find((g) => g.id === active) ?? priceGroups[0];

  return (
    <section id="price" className="scroll-mt-24 py-20 md:py-24" aria-labelledby="price-title">
      <div className="wrap">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Прозрачные цены"
            title="Прайс-лист"
            text="Стоимость базовых услуг. Финальная цена зависит от длины волос и сложности, её всегда подтвердит администратор до начала работы."
          />
        </div>

        <Reveal>
          <div className="mb-9 flex flex-wrap gap-2" role="tablist" aria-label="Направления услуг">
            {priceGroups.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={active === g.id}
                onClick={() => setActive(g.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-[0.9rem] font-medium transition duration-300 ease-smooth",
                  active === g.id
                    ? "border-ink bg-ink text-paper"
                    : "border-bone-3 bg-paper text-ink-soft hover:border-ink-soft"
                )}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div key={group.id} className="animate-fade" role="tabpanel">
            {group.items.map((it, idx) => (
              <div
                key={it.name}
                className={cn(
                  "flex items-baseline gap-4 py-[18px]",
                  idx !== group.items.length - 1 && "border-b border-bone-3"
                )}
              >
                <span className="text-[1.02rem] font-medium">
                  {it.name}
                  {it.note && <small className="mt-0.5 block text-[0.84rem] font-normal text-ink-soft">{it.note}</small>}
                </span>
                <span className="mt-[-4px] min-w-5 flex-1 border-b border-dotted border-bone-3" />
                <span className="whitespace-nowrap font-display text-[1.15rem]">{it.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-7 flex items-start gap-2.5 text-[0.86rem] text-ink-soft">
            <Info className="mt-0.5 h-[18px] w-[18px] flex-none text-wine" strokeWidth={1.7} />
            Цены указаны как ориентир. Точную стоимость визита рассчитает администратор при записи.
          </p>
          <div className="mt-9">
            <a href="#contacts" className="btn btn-primary">Записаться на услугу</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
