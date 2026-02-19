import AccountTree from "@mui/icons-material/AccountTree";
import Instagram from "@mui/icons-material/Instagram";
import Language from "@mui/icons-material/Language";
import LinkedIn from "@mui/icons-material/LinkedIn";
import QueryStats from "@mui/icons-material/QueryStats";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import Twitter from "@mui/icons-material/Twitter";
import type {
  FeatureItem,
  HeroStatItem,
  HeroContent,
  NavLinkItem,
  SocialLinkItem,
  StepItem
} from "@/types";

export const navLinks: NavLinkItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const heroContent: HeroContent = {
  eyebrow: "Global Team Building Platform",
  title: "Scale International Hiring With",
  subtitle:
    "Kovon-inspired hiring operations that help you source, onboard, and grow distributed teams with speed, visibility, and compliance.",
  primaryCta: "Get Started",
  secondaryCta: "Book Consultation"
};

export const heroMotionWords: string[] = [
  "Precision",
  "Speed",
  "Compliance",
  "Confidence"
];

export const heroMarqueeItems: string[] = [
  "Global Hiring",
  "Talent Intelligence",
  "Compliance-First",
  "Fast Onboarding",
  "Hiring Analytics",
  "Remote Team Scale"
];

export const heroStats: HeroStatItem[] = [
  { label: "Avg Hiring Cycle", value: "9 Days" },
  { label: "Candidate Match Accuracy", value: "94%" },
  { label: "Countries Served", value: "40+" }
];

export const features: FeatureItem[] = [
  {
    icon: Language,
    title: "Global Reach",
    description: "Hire high-quality professionals from global markets without setting up local entities."
  },
  {
    icon: QueryStats,
    title: "Full Visibility",
    description: "Track hiring pipeline progress and performance with structured updates."
  },
  {
    icon: RocketLaunch,
    title: "Rapid Execution",
    description: "Reduce hiring timelines using a repeatable framework designed for speed."
  },
  {
    icon: AccountTree,
    title: "Built To Scale",
    description: "Move from one critical hire to complete international team expansion smoothly."
  }
];

export const steps: StepItem[] = [
  {
    step: "1",
    title: "Define Team Needs",
    description: "Share role scope, skill expectations, and business timelines."
  },
  {
    step: "2",
    title: "Review Curated Talent",
    description: "Receive high-fit candidate profiles shortlisted for your goals."
  },
  {
    step: "3",
    title: "Select Final Candidates",
    description: "Conduct interviews with guided process support and coordination."
  },
  {
    step: "4",
    title: "Launch And Grow",
    description: "Complete onboarding and continue scaling with operational consistency."
  }
];

export const quickLinks: NavLinkItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks: SocialLinkItem[] = [
  { name: "LinkedIn", href: "#", icon: LinkedIn },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram }
];
