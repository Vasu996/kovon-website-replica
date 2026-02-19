import type { ElementType, ReactNode } from "react";

interface SectionProps {
  id?: string;
  as?: ElementType;
  className?: string;
  containerClassName?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  children: ReactNode;
}

const Section = ({
  id,
  as: Component = "section",
  className = "",
  containerClassName = "",
  maxWidth = "lg",
  children
}: SectionProps): JSX.Element => {
  const maxWidthClassName =
    maxWidth === "sm"
      ? "max-w-3xl"
      : maxWidth === "md"
        ? "max-w-5xl"
        : maxWidth === "xl"
          ? "max-w-[88rem]"
          : maxWidth === "full"
            ? "max-w-none"
            : "max-w-7xl";

  return (
    <Component
      id={id}
      className={`relative py-[var(--section-pad-mobile)] md:py-[var(--section-pad-tablet)] lg:py-[var(--section-pad-desktop)] ${className}`.trim()}
    >
      <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${maxWidthClassName} ${containerClassName}`.trim()}>
        {children}
      </div>
    </Component>
  );
};

export default Section;
