import ScrambleText from "./ScrambleText";

type PremiumButtonProps = {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
};

export default function PremiumButton({ href, text, variant = "primary" }: PremiumButtonProps) {
  return (
    <a href={href} className={variant === "primary" ? "btn-primary" : "btn-secondary"}>
      <ScrambleText text={text} speed={24} className="inline-block" />
    </a>
  );
}
