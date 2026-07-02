"use client";

import { useEffect, useState } from "react";
import { navLinks, salon } from "@/lib/data";
import { cn } from "@/lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("flex items-center gap-2.5", className)} aria-label={`${salon.name}, на главную`}>
      <span className="h-2.5 w-2.5 rounded-full bg-wine" />
      <span className="font-display text-2xl tracking-[0.14em]">{salon.name}</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[60] border-b transition-[border-color,box-shadow,background] duration-300",
        "supports-[backdrop-filter]:bg-bone/80 supports-[backdrop-filter]:backdrop-blur-md bg-bone",
        scrolled ? "border-bone-3 shadow-[0_6px_24px_-20px_rgba(53,35,40,.6)]" : "border-transparent"
      )}
    >
      <div className={cn("wrap flex items-center justify-between transition-[height] duration-300", scrolled ? "h-16" : "h-[74px]")}>
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.92rem] text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-wine transition-all duration-300 ease-smooth group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#contacts" className="btn btn-primary hidden lg:inline-flex">
          Записаться
        </a>

        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-0.5 w-6 rounded bg-ink transition-transform duration-300 ease-smooth", open && "translate-y-[7px] rotate-45")} />
          <span className={cn("h-0.5 w-6 rounded bg-ink transition-opacity duration-200", open && "opacity-0")} />
          <span className={cn("h-0.5 w-6 rounded bg-ink transition-transform duration-300 ease-smooth", open && "-translate-y-[7px] -rotate-45")} />
        </button>
      </div>

      {/* оверлей */}
      <div
        className={cn(
          "fixed inset-0 z-[65] bg-ink/40 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />
      {/* мобильное меню */}
      <nav
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[min(84vw,360px)] flex-col gap-1.5 bg-paper px-8 pb-10 pt-24 shadow-[-30px_0_60px_-30px_rgba(53,35,40,.5)] transition-transform duration-[400ms] ease-smooth lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Мобильная навигация"
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="border-b border-bone-3 py-3 font-display text-2xl transition-[color,padding] hover:pl-1.5 hover:text-wine"
          >
            {l.label}
          </a>
        ))}
        <a href="#contacts" onClick={() => setOpen(false)} className="btn btn-primary mt-6">
          Записаться онлайн
        </a>
      </nav>
    </header>
  );
}
