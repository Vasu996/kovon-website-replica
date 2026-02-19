"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { navLinks } from "@/constants/content";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <header
      className="relative z-40 border-b shadow-sm backdrop-blur-sm"
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

        <div ref={mobileMenuRef} className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <div className="relative">
            <button
              type="button"
              aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
            >
              {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
            {isMenuOpen ? (
              <>
                <button
                  type="button"
                  aria-label="Close menu overlay"
                  onClick={closeMenu}
                  className="fixed inset-0 z-20 bg-slate-950/30 backdrop-blur-[2px]"
                />
                <aside
                  id="mobile-nav-menu"
                  className="fixed left-4 right-4 top-[calc(var(--header-height-mobile)+0.55rem)] z-30 mx-auto max-w-sm rounded-2xl border p-4 shadow-[0_18px_50px_rgba(2,8,24,0.5)] backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(9,16,38,0.94)",
                    borderColor: "var(--line)",
                    color: "#ffffff"
                  }}
                >
                  <nav className="mb-4 flex flex-col gap-1.5">
                    {navLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={closeMenu}
                        className="rounded-lg border border-transparent px-3 py-2.5 text-[0.98rem] font-medium text-white/85 transition duration-200 hover:border-white/10 hover:bg-white/10 hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <PrimaryButton onClick={closeMenu} fullWidth className="!rounded-full !px-6 !py-2.5 !font-bold">
                    Get Started
                  </PrimaryButton>
                </aside>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
