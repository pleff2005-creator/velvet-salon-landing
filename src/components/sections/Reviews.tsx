import { Star } from "lucide-react";
import { reviews } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 py-20 md:py-24" aria-labelledby="rev-title">
      <div className="wrap">
        <div className="mb-12">
          <SectionHeading eyebrow="Отзывы гостей" title="Нам доверяют самое личное" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <article className="h-full rounded-[14px] border border-bone-3 bg-paper p-7 transition-[transform,box-shadow] duration-300 ease-smooth hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-4 flex gap-0.5 text-wine" aria-label="Оценка 5 из 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-[18px] w-[18px] fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="mb-5 text-[1rem] leading-[1.55]">{r.text}</p>
                <div className="flex items-center gap-3.5">
                  <span
                    className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full font-display text-[1.1rem] text-paper"
                    style={{ background: r.grad }}
                  >
                    {r.initial}
                  </span>
                  <div>
                    <b className="block text-[0.96rem]">{r.name}</b>
                    <span className="text-[0.82rem] text-ink-soft">{r.service}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
