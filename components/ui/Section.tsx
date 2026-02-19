import { Container, type ContainerProps } from "@mui/material";
import type { ElementType, ReactNode } from "react";

interface SectionProps {
  id?: string;
  as?: ElementType;
  className?: string;
  containerClassName?: string;
  maxWidth?: ContainerProps["maxWidth"];
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
  return (
    <Component
      id={id}
      className={`relative py-[var(--section-pad-mobile)] md:py-[var(--section-pad-tablet)] lg:py-[var(--section-pad-desktop)] ${className}`.trim()}
    >
      <Container maxWidth={maxWidth} className={containerClassName}>
        {children}
      </Container>
    </Component>
  );
};

export default Section;
