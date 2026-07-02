import { ArrowRight } from "lucide-react";
import { promos } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Promo() {
  return (
    <section id="promo" className="scroll-mt-24 py-20 md:py-24" aria-labelledby="promo-title">
      <div className="wrap">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Спецпредложения"
            title="Поводы записаться прямо сейчас"
            text="Сезонные предложения на популярные процедуры. Действуют по будням, количество мест ограничено расписанием мастеров."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promos.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article
                className={cn(
                  "group flex h-full min-h-[220px] flex-col overflow-hidden rounded-[14px] p-7 transition-[transform,box-shadow] duration-300 ease-smooth hover:-translate-y-1.5 hover:shadow-soft",
                  p.feature
                    ? "border-transparent bg-[linear-gradient(155deg,#7b3f4e,#4c2530)] text-paper"
                    : "border border-bone-3 bg-paper"
                )}
              >
                <span
                  className={cn(
                    "mb-auto self-start rounded-full px-3 py-1.5 text-[0.74rem] font-bold tracking-wide",
                    p.feature ? "bg-paper/20 text-paper" : "bg-wine-tint text-wine-deep"
                  )}
                >
                  {p.badge}
                </span>
                <h3 className="mb-2 mt-5 text-[1.4rem]">{p.title}</h3>
                <p className={cn("mb-4 text-[0.95rem]", p.feature ? "text-paper/80" : "text-ink-soft")}>
                  {p.desc}
                </p>
                <div className="mb-4 flex items-baseline gap-2.5">
                  <span className="font-display text-[1.8rem]">{p.now}</span>
                  <span className={cn("text-[1rem] line-through", p.feature ? "text-paper/70" : "text-ink-soft")}>
                    {p.old}
                  </span>
                </div>
                <a href="#contacts" className="inline-flex items-center gap-1.5 self-start text-[0.92rem] font-semibold">
                  {p.feature ? "Забронировать" : "Записаться"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
