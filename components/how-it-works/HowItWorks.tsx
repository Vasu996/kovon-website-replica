import { Container, Typography } from "@mui/material";
import { steps } from "@/constants/content";

const HowItWorks = (): JSX.Element => {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute right-10 top-10 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
      <Container maxWidth="lg">
        <div className="mb-10 text-center">
          <Typography className="typo-eyebrow mb-3 text-[var(--brand)]">
            How It Works
          </Typography>
          <Typography component="h2" className="typo-h2 mb-4">
            A Clear 4-Step Process
          </Typography>
          <Typography className="typo-subtitle mx-auto max-w-2xl">
            Structured delivery from kickoff to onboarding so your team hires confidently and scales without friction.
          </Typography>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <article key={item.step} className="glass-panel relative overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)]/35">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--surface-3)]" />
              {item.step !== "4" ? (
                <span className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-[var(--line)] lg:block" />
              ) : null}
              <span className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-extrabold text-white">
                {item.step}
              </span>
              <h3 className="typo-card-title relative mb-3 text-[var(--ink)]">{item.title}</h3>
              <p className="typo-card-copy relative">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
