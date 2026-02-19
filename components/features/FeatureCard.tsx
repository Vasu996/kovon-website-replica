import type { FeatureItem } from "@/types";

interface FeatureCardProps {
  feature: FeatureItem;
}

const FeatureCard = ({ feature }: FeatureCardProps): JSX.Element => {
  const Icon = feature.icon;

  return (
    <article className="glass-panel group relative h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[color:var(--brand)]/35 hover:shadow-[0_26px_50px_rgba(7,18,52,0.24)]">
      <span className="absolute left-6 top-0 h-[3px] w-12 rounded-full bg-[var(--brand)]/70" />
      <div className="mb-5 inline-flex rounded-2xl bg-[var(--surface-3)] p-3 text-[var(--brand)] transition group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:text-white">
        <Icon fontSize="medium" />
      </div>
      <h3 className="typo-card-title mb-3 text-[var(--ink)]">{feature.title}</h3>
      <p className="typo-card-copy">{feature.description}</p>
    </article>
  );
};

export default FeatureCard;
