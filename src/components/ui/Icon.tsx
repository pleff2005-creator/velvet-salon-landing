import {
  Scissors,
  Sparkles,
  Gem,
  Eye,
  Brush,
  Flower2,
  ShieldCheck,
  Star,
  Users,
  Heart,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  // категории
  hair: Scissors,
  nails: Gem,
  cosmo: Sparkles,
  brows: Eye,
  makeup: Brush,
  spa: Flower2,
  // преимущества
  shield: ShieldCheck,
  star: Star,
  team: Users,
  heart: Heart,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
