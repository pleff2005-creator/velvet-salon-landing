import { Reveal } from "@/components/animations/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="max-w-2xl">
      {eyebrow && (
        <p className={light ? "eyebrow text-[#d8a9b4]" : "eyebrow"}>{eyebrow}</p>
      )}
      <h2
        className={`text-[clamp(2rem,5vw,3rem)] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-[1.05rem] ${
            light ? "text-[rgba(245,242,239,.72)]" : "text-ink-soft"
          }`}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}
