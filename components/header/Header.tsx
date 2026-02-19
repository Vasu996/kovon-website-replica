"use client";

import { useState } from "react";
import Image from "next/image";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { AppBar, Box, Container, Drawer, IconButton, Toolbar } from "@mui/material";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useColorMode } from "@/app/theme-provider";
import { navLinks } from "@/constants/content";

const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { mode, toggleMode } = useColorMode();

  const closeDrawer = (): void => setOpen(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="border-b shadow-sm backdrop-blur-sm"
      sx={{
        backgroundColor: mode === "dark" ? "rgba(9,16,38,0.78)" : "rgba(9,16,38,0.92)",
        borderColor: "var(--line)",
        color: "#ffffff",
        backdropFilter: "blur(8px) saturate(125%)",
        WebkitBackdropFilter: "blur(8px) saturate(125%)"
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          className="h-[var(--header-height-mobile)] justify-between gap-2 md:h-[var(--header-height)] md:gap-3"
        >
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
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleMode}
              size="small"
              sx={{ color: "#ffffff" }}
            >
              {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>

            <PrimaryButton
              endIcon={<NorthEastRoundedIcon fontSize="small" />}
              className="!rounded-full !px-6 !py-2.5 !text-[0.86rem] !font-bold !text-white !shadow-lg"
            >
              Get Started
            </PrimaryButton>
          </div>

          <div className="flex items-center gap-0.5 sm:gap-1 md:hidden">
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleMode}
              sx={{ color: "#ffffff" }}
            >
              {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>

            <IconButton
              aria-label="Open menu"
              onClick={(): void => setOpen(true)}
              sx={{ color: "#ffffff" }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            width: 292,
            backgroundColor: mode === "dark" ? "rgba(9,16,38,0.75)" : "rgb(9,16,38)",
            backdropFilter: mode === "dark" ? "blur(10px) saturate(125%)" : "none",
            WebkitBackdropFilter: mode === "dark" ? "blur(10px) saturate(125%)" : "none",
            borderLeft: "1px solid var(--line)",
            color: "#ffffff"
          }
        }}
      >
        <Box className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-base font-bold">Navigation</span>
            <IconButton aria-label="Close menu" onClick={closeDrawer} sx={{ color: "#ffffff" }}>
              <CloseRoundedIcon />
            </IconButton>
          </div>

          <nav className="mb-7 flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeDrawer}
                className="rounded-lg px-3 py-2 text-[clamp(0.9rem,0.84rem+0.3vw,1rem)] font-medium text-white/82 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <PrimaryButton fullWidth onClick={closeDrawer} className="!rounded-full !px-6 !py-2.5 !font-bold">
            Get Started
          </PrimaryButton>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
