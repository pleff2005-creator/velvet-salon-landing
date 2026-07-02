import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { salon } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";
import { LeadForm } from "./LeadForm";

export function Contact() {
  return (
    <section id="contacts" className="scroll-mt-24 bg-bone-2 py-20 md:py-24" aria-labelledby="contacts-title">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <h2 id="contacts-title" className="text-[clamp(2rem,5vw,2.8rem)]">Запишитесь на визит</h2>
          <p className="mb-8 mt-5 max-w-[44ch] text-ink-soft">
            Оставьте заявку, и администратор перезвонит в течение 15 минут в рабочее время,
            чтобы подобрать удобное время и мастера.
          </p>

          <div className="mb-8 flex flex-col gap-5">
            <InfoItem icon={<MapPin />} label="Адрес">
              <b className="text-[1.05rem] font-semibold">{salon.address}</b>
            </InfoItem>
            <InfoItem icon={<Phone />} label="Телефон">
              <a href={salon.phoneHref} className="text-[1.05rem] font-semibold hover:text-wine">
                {salon.phone}
              </a>
            </InfoItem>
            <InfoItem icon={<Clock />} label="Часы работы">
              <b className="text-[1.05rem] font-semibold">{salon.hours}</b>
            </InfoItem>
          </div>

          <div className="flex gap-3">
            {[
              { icon: <Send className="h-[22px] w-[22px]" />, label: "Telegram" },
              { icon: <MessageCircle className="h-[22px] w-[22px]" />, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href="#contacts"
                aria-label={s.label}
                title={s.label}
                className="grid h-[46px] w-[46px] place-items-center rounded-xl border border-bone-3 bg-paper text-ink transition duration-300 ease-smooth hover:-translate-y-0.5 hover:border-wine hover:bg-wine hover:text-paper"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* карта-заглушка */}
          <div
            className="relative mt-7 h-[180px] overflow-hidden rounded-[14px] border border-bone-3"
            role="img"
            aria-label="Схематичная карта расположения салона в центре Москвы"
            style={{
              background:
                "linear-gradient(0deg,rgba(123,63,78,.06),rgba(123,63,78,.06)), repeating-linear-gradient(0deg,transparent 0 38px,#e2d9d1 38px 39px), repeating-linear-gradient(90deg,transparent 0 46px,#e2d9d1 46px 47px), #f5f2ef",
            }}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-wine">
              <MapPin className="h-9 w-9 fill-wine drop-shadow-[0_6px_10px_rgba(53,35,40,.4)]" strokeWidth={1} />
            </span>
            <span className="absolute bottom-3 left-3.5 rounded-full border border-bone-3 bg-paper px-3.5 py-2 text-[0.82rem] font-semibold">
              ул. Большая Дмитровка, 12
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-bone-3 bg-paper text-wine [&_svg]:h-[22px] [&_svg]:w-[22px]">
        {icon}
      </span>
      <div>
        <span className="text-[0.8rem] text-ink-soft">{label}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}
