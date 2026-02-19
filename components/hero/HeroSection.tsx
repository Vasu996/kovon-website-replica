import PrimaryButton from "@/components/ui/PrimaryButton";
import Section from "@/components/ui/Section";
import { CheckCircleIcon, GlobeIcon, TrendingUpIcon } from "@/components/ui/Icons";
import {
  heroContent,
  heroMarqueeItems,
  heroStats
} from "@/constants/content";

const HeroSection = (): JSX.Element => {
  return (
    <Section
      id="home"
      className="overflow-hidden py-20 md:py-28"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-400/16 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-12 h-96 w-96 rounded-full bg-cyan-300/12 blur-3xl" />

      <div className="grid items-center gap-10 md:gap-11 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-6">
          <p className="typo-eyebrow inline-flex rounded-full border border-[var(--line)] bg-[var(--glass-bg)] px-4 py-1.5 text-[var(--brand)]">
            {heroContent.eyebrow}
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[var(--ink)] md:text-6xl">
            {heroContent.title} <span className="text-gradient">Precision</span>
          </h1>

          <p className="max-w-xl text-[clamp(0.98rem,1.2vw,1.07rem)] font-medium leading-[1.8] text-[var(--ink-soft)]">
            {heroContent.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--glass-bg)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
            Optimized For
            <span className="font-extrabold text-[var(--brand)]">Precision</span>
          </div>

          <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-3">
            <PrimaryButton size="large" glow>
              {heroContent.primaryCta}
            </PrimaryButton>
            <PrimaryButton tone="ghost" size="large">
              {heroContent.secondaryCta}
            </PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="glass-soft rounded-xl px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-extrabold text-[var(--ink)]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[1.8rem] p-5 md:p-7">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
              <GlobeIcon className="h-4 w-4" />
              Global Hiring Command Center
            </div>
            <TrendingUpIcon className="h-4 w-4 text-[var(--brand)]" />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-3">
            <div className="glass-soft rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-soft)]">
                Time To Hire
              </p>
              <p className="mt-2 text-2xl font-extrabold text-[var(--ink)]">-53%</p>
            </div>
            <div className="glass-soft rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-soft)]">
                Qualified Talent
              </p>
              <p className="mt-2 text-2xl font-extrabold text-[var(--ink)]">1.4K+</p>
            </div>
          </div>

          <div className="glass-soft rounded-xl p-4">
            <div className="mb-3 h-2 rounded-full bg-[var(--surface-3)]">
              <div className="h-full w-4/5 rounded-full bg-[var(--brand)]" />
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
              <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
              Compliance and onboarding checks automated end-to-end
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 md:mt-11">
        <div className="glass-soft marquee-wrap overflow-hidden rounded-2xl py-3">
          <div className="marquee-track">
            {[...heroMarqueeItems, ...heroMarqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
