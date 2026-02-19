import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { ArrowUpRightIcon, MenuIcon } from "@/components/ui/Icons";
import { navLinks } from "@/constants/content";

const Header = (): JSX.Element => {
  return (
    <header
      className="border-b shadow-sm backdrop-blur-sm"
      style={{
        backgroundColor: "var(--header-bg)",
        borderColor: "var(--line)",
        color: "#ffffff",
        backdropFilter: "blur(8px) saturate(125%)",
        WebkitBackdropFilter: "blur(8px) saturate(125%)"
      }}
    >
      <div className="mx-auto flex h-[var(--header-height-mobile)] w-full max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 md:h-[var(--header-height)] md:gap-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="Kovon Global Talent Mobility"
            width={186}
            height={80}
            priority
            sizes="(max-width: 640px) 134px, 150px"
            className="h-[2.1rem] w-auto sm:h-[2.35rem]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-[clamp(0.84rem,0.8rem+0.2vw,0.92rem)] font-semibold tracking-[0.01em] text-white/82 transition-colors duration-200 hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-[7px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-250 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <PrimaryButton
            endIcon={<ArrowUpRightIcon className="h-4 w-4" />}
            className="!rounded-full !px-6 !py-2.5 !text-[0.86rem] !font-bold !text-white !shadow-lg"
          >
            Get Started
          </PrimaryButton>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <details className="relative">
          <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full text-white transition hover:bg-white/10">
            <MenuIcon className="h-5 w-5" />
          </summary>
          <aside
            className="absolute right-0 top-[calc(100%+0.5rem)] z-20 w-[250px] rounded-xl border p-4 shadow-lg"
            style={{
              backgroundColor: "rgb(9,16,38)",
              borderColor: "var(--line)",
              color: "#ffffff"
            }}
          >
            <nav className="mb-5 flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-[0.95rem] font-medium text-white/82 transition duration-200 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <PrimaryButton fullWidth className="!rounded-full !px-6 !py-2.5 !font-bold">
              Get Started
            </PrimaryButton>
          </aside>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Header;
