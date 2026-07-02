import { features } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";
import { Icon } from "@/components/ui/Icon";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-ink py-20 text-bone md:py-24" aria-labelledby="about-title">
      <div className="wrap grid items-center gap-11 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow text-[#d8a9b4]">О салоне</p>
          <h2 id="about-title" className="text-[clamp(2rem,5vw,3rem)] text-paper">
            Место, где о вас думают заранее
          </h2>
          <p className="mt-4 text-[1.06rem] text-[rgba(245,242,239,.78)]">
            ВЕЛЬВЕТ вырос из небольшой парикмахерской в полноценный бьюти-дом в самом центре Москвы.
            Мы собрали команду, которой доверяем сами, и работаем так, чтобы каждый визит хотелось повторить.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title}>
                <span className="mb-3.5 grid h-10 w-10 place-items-center rounded-[10px] bg-[rgba(216,169,180,.16)] text-[#e7bcc5]">
                  <Icon name={f.icon} className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mb-1.5 font-sans text-[1.05rem] font-semibold text-paper">{f.title}</h3>
                <p className="text-[0.9rem] text-[rgba(245,242,239,.66)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative aspect-square overflow-hidden rounded-3xl shadow-soft"
            style={{
              background:
                "radial-gradient(100% 80% at 20% 20%, #a86b78 0%, transparent 55%), linear-gradient(160deg,#5a2c37,#2c161c)",
            }}
            aria-hidden
          >
            <p className="absolute inset-x-6 bottom-6 font-display text-[1.35rem] italic leading-[1.35] text-paper">
              «Мы делаем не процедуры, а настроение, с которым вы выходите за дверь».
              <span className="mt-3 block font-sans text-[0.85rem] not-italic text-[rgba(255,255,255,.7)]">
                Марина Соколова, арт-директор салона
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
