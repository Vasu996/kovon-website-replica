import type { SVGProps } from "react";

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true
};

export const GlobeIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </svg>
);

export const ChartIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M4 19h16" />
    <path d="M7 16v-5" />
    <path d="M12 16v-8" />
    <path d="M17 16v-3" />
    <path d="m5 10 4-3 4 2 5-4" />
  </svg>
);

export const RocketIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M6 18c0-3 2-5 5-5" />
    <path d="M14 10 9 5c4-2 8-1 10 1-1 2-1 6-5 10Z" />
    <circle cx="14.5" cy="9.5" r="1" />
    <path d="M5 14 3 21l7-2" />
  </svg>
);

export const NetworkIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M7 7.5 10.5 16" />
    <path d="M17 7.5 13.5 16" />
    <path d="M7 6h10" />
  </svg>
);

export const LinkedInIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7" />
    <path d="M8 7h.01" />
    <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
    <path d="M12 10v7" />
  </svg>
);

export const TwitterIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M22 5.9a7.9 7.9 0 0 1-2.3.6 4 4 0 0 0 1.8-2.2 8.1 8.1 0 0 1-2.5 1 4 4 0 0 0-6.8 3.6A11.4 11.4 0 0 1 3 4.9a4 4 0 0 0 1.2 5.3 4 4 0 0 1-1.8-.5v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.4a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.3 11.2-11.9A8 8 0 0 0 22 5.9Z" />
  </svg>
);

export const InstagramIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" />
  </svg>
);

export const MenuIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);

export const CloseIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </svg>
);

export const SunIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.9 4.9 1.4 1.4" />
    <path d="m17.7 17.7 1.4 1.4" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.9 19.1 1.4-1.4" />
    <path d="m17.7 6.3 1.4-1.4" />
  </svg>
);

export const MoonIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

export const ArrowUpRightIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>
);

export const CheckCircleIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.2 2.2 4.8-4.8" />
  </svg>
);

export const TrendingUpIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M4 16 10 10l4 4 6-6" />
    <path d="M20 8V4h-4" />
  </svg>
);
