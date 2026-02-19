import type { FeatureItem } from "@/types";

interface FeatureCardProps {
  feature: FeatureItem;
}

const FeatureCard = ({ feature }: FeatureCardProps): JSX.Element => {
  const Icon = feature.icon;

  return (
    <article className="glass-panel group relative h-full rounded-3xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[color:var(--brand)]/35 hover:shadow-xl">
      <span className="absolute left-6 top-0 h-[3px] w-12 rounded-full bg-[var(--brand)]/70 transition-all duration-300 group-hover:w-16" />
      <div className="mb-5 inline-flex rounded-full bg-blue-50 p-4 text-[var(--brand)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_24px_rgba(13,99,255,0.2)]">
        <Icon fontSize="medium" />
      </div>
      <h3 className="typo-card-title mb-3 text-[var(--ink)]">{feature.title}</h3>
      <p className="typo-card-copy">{feature.description}</p>
    </article>
  );
};

export default FeatureCard;
