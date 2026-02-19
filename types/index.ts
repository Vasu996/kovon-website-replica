import type { SvgIconComponent } from "@mui/icons-material";

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
  icon: SvgIconComponent;
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
  icon: SvgIconComponent;
}

export interface HeroStatItem {
  label: string;
  value: string;
}
