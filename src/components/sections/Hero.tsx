"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative py-16 md:py-20 lg:py-[100px]" aria-labelledby="hero-title">
      <div className="wrap grid items-center gap-11 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div>
          <motion.p className="eyebrow" {...rise(0)}>
            Салон красоты в центре Москвы
          </motion.p>
          <motion.h1
            id="hero-title"
            className="text-[clamp(2.6rem,9vw,4.6rem)]"
            {...rise(0.08)}
          >
            Красота, в которой хочется <em className="not-italic text-wine italic">оставаться</em>
          </motion.h1>
          <motion.p className="mt-5 max-w-[46ch] text-[1.12rem] text-ink-soft" {...rise(0.16)}>
            Волосы, ногти, косметология, брови и SPA под одной крышей. Мастера с опытом от 7 лет,
            чистые материалы премиум-брендов и атмосфера, куда возвращаются.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3.5" {...rise(0.24)}>
            <a href="#contacts" className="btn btn-primary">Записаться онлайн</a>
            <a href="#price" className="btn btn-ghost">Смотреть прайс</a>
          </motion.div>
          <motion.div className="mt-11 flex flex-wrap gap-9" {...rise(0.32)}>
            {stats.map((s) => (
              <div key={s.label}>
                <span className="block font-display text-[2rem] text-ink">{s.num}</span>
                <span className="text-[0.8rem] text-ink-soft">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft"
          style={{
            background:
              "radial-gradient(120% 90% at 80% 10%, #a86b78 0%, transparent 55%), radial-gradient(120% 100% at 10% 90%, #d9c4bd 0%, transparent 50%), linear-gradient(150deg,#6d3644 0%,#402028 100%)",
          }}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        >
          <svg className="absolute inset-0 h-full w-full opacity-50 mix-blend-overlay" preserveAspectRatio="none" viewBox="0 0 100 100">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
            </filter>
            <rect width="100" height="100" filter="url(#grain)" />
          </svg>
          <div className="absolute inset-x-5 bottom-5 flex items-center gap-3.5 rounded-2xl bg-paper/90 px-5 py-[18px] backdrop-blur">
            <div
              className="grid h-11 w-11 flex-none place-items-center rounded-full"
              style={{ background: "conic-gradient(#7b3f4e 0 82%, #e2d9d1 82% 100%)" }}
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-paper text-[0.72rem] font-bold text-wine">SPA</span>
            </div>
            <div>
              <b className="text-[0.95rem]">Комплимент новым гостям</b>
              <span className="block text-[0.78rem] text-ink-soft">Диагностика волос и укладка в подарок</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
