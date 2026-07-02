"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

type Errors = { name?: boolean; phone?: boolean; consent?: boolean };

export function LeadForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "");
    const consent = fd.get("consent") === "on";

    const digits = phone.replace(/\D/g, "");
    const next: Errors = {
      name: name.length < 2,
      phone: digits.length < 10,
      consent: !consent,
    };
    setErrors(next);
    if (next.name || next.phone || next.consent) {
      const firstBad = form.querySelector<HTMLElement>("[data-invalid='true']");
      firstBad?.focus();
      return;
    }

    setSending(true);
    // Заглушка отправки: реальная интеграция подключается в src/app/api/lead/route.ts
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      });
    } catch {
      /* демо-режим: отправка не критична */
    }
    setSending(false);
    setDone(true);
    form.reset();
  }

  if (done) {
    return (
      <div className="rounded-[20px] border border-bone-3 bg-paper p-8 shadow-soft">
        <div className="animate-fade py-5 text-center">
          <div className="mx-auto mb-[18px] grid h-[66px] w-[66px] place-items-center rounded-full bg-wine-tint text-wine">
            <Check className="h-8 w-8" strokeWidth={2.2} />
          </div>
          <h3 className="mb-2 text-[1.5rem]">Заявка принята</h3>
          <p className="text-[0.95rem] text-ink-soft">
            Спасибо. Администратор свяжется с вами в ближайшее время, чтобы подтвердить запись.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[20px] border border-bone-3 bg-paper p-[30px] shadow-soft"
    >
      <h3 className="mb-1.5 text-[1.5rem]">Онлайн-запись</h3>
      <p className="mb-6 text-[0.9rem] text-ink-soft">Поля со звёздочкой обязательны для заполнения.</p>

      <Field label="Имя" required error={errors.name} errorText="Пожалуйста, укажите имя.">
        <input
          name="name"
          type="text"
          placeholder="Как к вам обращаться"
          autoComplete="name"
          data-invalid={errors.name}
          onInput={() => setErrors((s) => ({ ...s, name: false }))}
          className={inputCls(errors.name)}
        />
      </Field>

      <Field label="Телефон" required error={errors.phone} errorText="Введите корректный номер телефона.">
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="+7 (___) ___-__-__"
          autoComplete="tel"
          data-invalid={errors.phone}
          onInput={() => setErrors((s) => ({ ...s, phone: false }))}
          className={inputCls(errors.phone)}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Услуга">
          <select name="service" className={inputCls(false)}>
            <option value="">Выберите направление</option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Желаемая дата">
          <input name="date" type="date" className={inputCls(false)} />
        </Field>
      </div>

      <Field label="Комментарий">
        <textarea
          name="comment"
          placeholder="Удобное время, пожелания к мастеру"
          className={cn(inputCls(false), "min-h-[88px] resize-y")}
        />
      </Field>

      <label
        className={cn(
          "mb-5 flex items-start gap-3 text-[0.82rem]",
          errors.consent ? "text-[#c0392b]" : "text-ink-soft"
        )}
      >
        <input
          name="consent"
          type="checkbox"
          data-invalid={errors.consent}
          onChange={() => setErrors((s) => ({ ...s, consent: false }))}
          className="mt-0.5 h-[18px] w-[18px] flex-none accent-wine"
        />
        <span>
          Я согласен на обработку персональных данных и принимаю{" "}
          <a href="#contacts" className="text-wine underline">политику конфиденциальности</a>.
        </span>
      </label>

      <button type="submit" disabled={sending} className="btn btn-primary w-full disabled:opacity-70">
        {sending ? "Отправляем..." : "Отправить заявку"}
      </button>
    </form>
  );
}

function inputCls(error?: boolean) {
  return cn(
    "w-full rounded-[10px] border bg-bone px-[15px] py-[13px] text-[1rem] text-ink transition",
    "placeholder:text-[#a89e98] focus:bg-paper focus:outline-none",
    error
      ? "border-[#c0392b] shadow-[0_0_0_3px_rgba(192,57,43,.12)]"
      : "border-bone-3 focus:border-wine focus:shadow-[0_0_0_3px_theme(colors.wine.tint)]"
  );
}

function Field({
  label,
  required,
  error,
  errorText,
  children,
}: {
  label: string;
  required?: boolean;
  error?: boolean;
  errorText?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-[18px]">
      <label className="mb-[7px] block text-[0.85rem] font-semibold">
        {label} {required && <span className="text-wine">*</span>}
      </label>
      {children}
      {error && errorText && <span className="mt-1.5 block text-[0.8rem] text-[#c0392b]">{errorText}</span>}
    </div>
  );
}
