import { Container, Grid, Typography } from "@mui/material";
import FeatureCard from "@/components/features/FeatureCard";
import { features } from "@/constants/content";

const FeaturesSection = (): JSX.Element => {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-12 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-300/10 blur-3xl" />
      <Container maxWidth="lg">
        <div className="glass-panel rounded-[2rem] p-6 md:p-10">
          <div className="mb-10 text-center">
            <Typography className="typo-eyebrow mb-3 text-[var(--brand)]">
              Services
            </Typography>
            <Typography component="h2" className="typo-h2 mb-4">
              Features That Power Global Hiring
            </Typography>
            <Typography className="typo-subtitle mx-auto max-w-2xl">
              Designed to handle sourcing, operations, and scale while keeping every hiring decision fast and data-backed.
            </Typography>
          </div>

          <Grid container spacing={3}>
            {features.map((feature) => (
              <Grid key={feature.title} item xs={12} sm={6} md={3}>
                <FeatureCard feature={feature} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
