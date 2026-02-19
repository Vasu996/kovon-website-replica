import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: "solid" | "ghost";
  glow?: boolean;
  fullWidth?: boolean;
  endIcon?: ReactNode;
  size?: "medium" | "large";
}

const PrimaryButton = ({
  tone = "solid",
  glow = false,
  fullWidth = false,
  endIcon,
  size = "medium",
  className = "",
  type = "button",
  children,
  ...props
}: PrimaryButtonProps): JSX.Element => {
  const baseClassName =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 font-bold tracking-[0.01em] transition-all duration-300";

  const sizeClassName = size === "large" ? "py-3 text-[0.9rem]" : "py-2.5 text-[0.86rem]";

  const toneClassName =
    tone === "solid" ? "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]" : "border border-[var(--line)] bg-[var(--glass-bg)] text-[var(--ink)] hover:border-[color:var(--brand)]/45 hover:bg-[var(--surface-3)]";

  const glowClassName = glow ? "ring-glow hover:shadow-[0_16px_34px_rgba(13,99,255,0.24)]" : "";
  const widthClassName = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      className={`${baseClassName} ${sizeClassName} ${toneClassName} ${glowClassName} ${widthClassName} ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      {endIcon}
    </button>
  );
};

export default PrimaryButton;
