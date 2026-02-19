import Section from "@/components/ui/Section";
import { quickLinks, socialLinks } from "@/constants/content";

const Footer = (): JSX.Element => {
  return (
    <Section as="footer" id="contact">
      <div className="glass-panel rounded-[2rem] p-8 text-[var(--ink-soft)] md:p-10">
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface-3)] px-4 py-4 text-center sm:px-6">
          <p className="text-sm font-semibold leading-7 text-[var(--ink-soft)] sm:text-base">
            Ready to build your next global team?
            <a href="#home" className="ml-2 font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]">
              Start now
            </a>
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-extrabold leading-tight tracking-[-0.01em] text-[var(--ink)]">
              Ko<span className="text-gradient">von</span>
            </h3>
            <p className="max-w-xs text-sm font-medium leading-7">
              Build global teams with a high-velocity hiring engine designed for modern distributed companies.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--ink)]">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((item) => (
                <a key={item.label} href={item.href} className="text-sm transition hover:text-[var(--brand)]">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--ink)]">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>hello@kovon.io</p>
              <p>+1 (800) 555-1023</p>
              <p>San Francisco, United States</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--ink)]">Follow</h4>
            <div className="flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className="glass-soft rounded-full p-2.5 text-[var(--ink-soft)] transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:text-[var(--brand)]"
                  >
                    <Icon fontSize="small" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--line)] pt-6 text-center text-xs">
          Copyright {new Date().getFullYear()} Kovon. All rights reserved.
        </div>
      </div>
    </Section>
  );
};

export default Footer;
