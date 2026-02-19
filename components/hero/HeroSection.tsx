"use client";

import { useEffect, useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { Button, Container, Stack, Typography } from "@mui/material";
import {
  heroContent,
  heroMarqueeItems,
  heroMotionWords,
  heroStats
} from "@/constants/content";

const HeroSection = (): JSX.Element => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroMotionWords.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-12 pt-12 md:pb-16 md:pt-20">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-400/16 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-12 h-96 w-96 rounded-full bg-cyan-300/12 blur-3xl" />

      <Container maxWidth="lg" className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Typography className="typo-eyebrow mb-5 inline-flex rounded-full border border-[var(--line)] bg-[var(--glass-bg)] px-4 py-1.5 text-[var(--brand)]">
              {heroContent.eyebrow}
            </Typography>

            <Typography
              component="h1"
              className="mb-6 whitespace-nowrap text-[clamp(1.08rem,3.18vw,3.45rem)] font-black leading-[1.06] tracking-[-0.02em] text-[var(--ink)]"
            >
              {heroContent.title}{" "}
              <span key={`headline-${heroMotionWords[wordIndex]}`} className="motion-word text-gradient">
                {heroMotionWords[wordIndex]}
              </span>
            </Typography>

            <Typography className="mb-8 max-w-[56ch] text-[clamp(0.98rem,1.2vw,1.07rem)] font-medium leading-[1.8] text-[var(--ink-soft)]">
              {heroContent.subtitle}
            </Typography>

            <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--glass-bg)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
              Optimized For
              <span key={heroMotionWords[wordIndex]} className="motion-word font-extrabold text-[var(--brand)]">
                {heroMotionWords[wordIndex]}
              </span>
            </div>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.75} className="items-start">
              <Button
                variant="contained"
                size="large"
                className="ring-glow !rounded-full !bg-[var(--brand)] !px-7 !py-3 !text-[0.9rem] !font-bold hover:!bg-[var(--brand-dark)]"
              >
                {heroContent.primaryCta}
              </Button>
              <Button
                variant="outlined"
                size="large"
                className="!rounded-full !border-[var(--line)] !bg-[var(--glass-bg)] !px-7 !py-3 !text-[0.9rem] !font-bold !text-[var(--ink)]"
              >
                {heroContent.secondaryCta}
              </Button>
            </Stack>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
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
                <PublicRoundedIcon fontSize="small" />
                Global Hiring Command Center
              </div>
              <TrendingUpRoundedIcon className="text-[var(--brand)]" fontSize="small" />
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
                <CheckCircleRoundedIcon className="text-emerald-500" fontSize="small" />
                Compliance and onboarding checks automated end-to-end
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container maxWidth="lg" className="relative mt-10">
        <div className="glass-soft marquee-wrap overflow-hidden rounded-2xl py-3">
          <div className="marquee-track">
            {[...heroMarqueeItems, ...heroMarqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
