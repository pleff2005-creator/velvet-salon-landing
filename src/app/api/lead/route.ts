import { NextResponse } from "next/server";

// Приём заявки из формы записи.
// Портфолио-версия: заявка логируется и возвращается ok.
// Точка расширения под боевую версию: отправка в CRM-webhook (AmoCRM / Bitrix24),
// в Telegram-бота администратора или в сервис онлайн-записи (YCLIENTS).
export async function POST(req: Request) {
  try {
    const data = await req.json();
    // eslint-disable-next-line no-console
    console.log("Новая заявка на запись:", {
      name: data?.name,
      phone: data?.phone,
      service: data?.service,
      date: data?.date,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
