"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-smooth lg:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <a
        href="#contacts"
        className="btn btn-primary shadow-[0_12px_30px_-8px_rgba(123,63,78,.7)]"
      >
        Записаться
      </a>
    </div>
  );
}
