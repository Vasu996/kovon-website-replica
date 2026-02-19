import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface FeatureItem {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface SocialLinkItem {
  name: string;
  href: string;
  icon: IconComponent;
}

export interface HeroStatItem {
  label: string;
  value: string;
}
