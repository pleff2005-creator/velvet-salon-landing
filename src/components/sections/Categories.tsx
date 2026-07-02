"use client";

import { categories } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

export function Categories() {
  const select = (id: string) => {
    window.dispatchEvent(new CustomEvent("select-price", { detail: id }));
    document.getElementById("price")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="categories" className="scroll-mt-24 bg-bone-2 py-20 md:py-24" aria-labelledby="cat-title">
      <div className="wrap">
        <div className="mb-12">
          <SectionHeading
            title="Всё для вашей красоты"
            text="Шесть направлений и мастера под каждую задачу. Выберите услугу или загляните в полный прайс."
          />
        </div>

        <div className="grid gap-px overflow-hidden rounded-[14px] border border-bone-3 bg-bone-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => select(c.id)}
                className="group flex h-full w-full flex-col gap-3 bg-bone p-7 text-left transition-colors duration-300 ease-smooth hover:bg-paper"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-wine-tint text-wine-deep">
                  <Icon name={c.icon} className="h-[26px] w-[26px]" />
                </span>
                <h3 className="text-[1.25rem]">{c.title}</h3>
                <p className="text-[0.9rem] text-ink-soft">{c.desc}</p>
                <span className="mt-auto text-[0.85rem] font-semibold text-wine opacity-0 transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
                  Смотреть цены →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
