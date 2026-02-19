import { Button, type ButtonProps } from "@mui/material";

interface PrimaryButtonProps extends Omit<ButtonProps, "color"> {
  tone?: "solid" | "ghost";
  glow?: boolean;
}

const PrimaryButton = ({
  tone = "solid",
  glow = false,
  className = "",
  ...props
}: PrimaryButtonProps): JSX.Element => {
  const baseClassName =
    "!rounded-full !px-7 !py-3 !text-[0.9rem] !font-bold !normal-case !tracking-[0.01em] !transition-all duration-300";

  const toneClassName =
    tone === "solid"
      ? "!bg-[var(--brand)] !text-white hover:!bg-[var(--brand-dark)]"
      : "!border-[var(--line)] !bg-[var(--glass-bg)] !text-[var(--ink)] hover:!border-[color:var(--brand)]/45 hover:!bg-[var(--surface-3)]";

  const glowClassName = glow ? "ring-glow hover:!shadow-[0_16px_34px_rgba(13,99,255,0.24)]" : "";

  return (
    <Button
      variant={tone === "solid" ? "contained" : "outlined"}
      className={`${baseClassName} ${toneClassName} ${glowClassName} ${className}`.trim()}
      {...props}
    />
  );
};

export default PrimaryButton;
