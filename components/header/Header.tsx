"use client";

import { useState } from "react";
import Image from "next/image";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar
} from "@mui/material";
import { navLinks } from "@/constants/content";
import { useColorMode } from "@/app/theme-provider";

const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { mode, toggleMode } = useColorMode();

  const closeDrawer = (): void => setOpen(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="border-b"
      sx={{
        // Always dark color
        backgroundColor:
          mode === "dark"
            ? "rgba(9,16,38,0.75)" // glass in dark
            : "rgb(9,16,38)",      // solid dark in light

        borderColor: "var(--line)",
        color: "#ffffff",

        backdropFilter:
          mode === "dark"
            ? "blur(14px) saturate(135%)"
            : "none",

        WebkitBackdropFilter:
          mode === "dark"
            ? "blur(14px) saturate(135%)"
            : "none"
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          className="h-[clamp(4rem,3.4rem+1.8vw,4.75rem)] justify-between gap-3"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/images/Logo.png"
              alt="Kovon Global Talent Mobility"
              width={186}
              height={80}
              priority
              className="h-[clamp(2rem,1.6rem+1.5vw,2.6rem)] w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-[clamp(1.1rem,0.5rem+2.4vw,2.2rem)] md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-[clamp(0.84rem,0.8rem+0.2vw,0.92rem)] font-semibold text-white/80 transition hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-[7px] left-0 h-[2px] w-0 bg-[var(--brand)] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleMode}
              size="small"
              sx={{ color: "#ffffff" }} // always visible
            >
              {mode === "dark" ? (
                <LightModeRoundedIcon />
              ) : (
                <DarkModeRoundedIcon />
              )}
            </IconButton>

            <Button
              variant="contained"
              endIcon={<NorthEastRoundedIcon fontSize="small" />}
              className="!rounded-full !bg-[var(--brand)] !px-[clamp(1rem,0.8rem+0.9vw,1.25rem)] !py-[clamp(0.46rem,0.38rem+0.35vw,0.54rem)] !text-[clamp(0.74rem,0.7rem+0.2vw,0.82rem)] !font-bold !shadow-[0_10px_22px_rgba(13,99,255,0.32)] hover:!bg-[var(--brand-dark)]"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-1 md:hidden">
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleMode}
              sx={{ color: "#ffffff" }}
            >
              {mode === "dark" ? (
                <LightModeRoundedIcon />
              ) : (
                <DarkModeRoundedIcon />
              )}
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

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            width: 292,
            backgroundColor:
              mode === "dark"
                ? "rgba(9,16,38,0.75)"
                : "rgb(9,16,38)",

            backdropFilter:
              mode === "dark"
                ? "blur(16px) saturate(130%)"
                : "none",

            WebkitBackdropFilter:
              mode === "dark"
                ? "blur(16px) saturate(130%)"
                : "none",

            borderLeft: "1px solid var(--line)",
            color: "#ffffff"
          }
        }}
      >
        <Box className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-base font-bold">Navigation</span>
            <IconButton
              aria-label="Close menu"
              onClick={closeDrawer}
              sx={{ color: "#ffffff" }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </div>

          <nav className="mb-7 flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeDrawer}
                className="rounded-lg px-3 py-2 text-[clamp(0.9rem,0.84rem+0.3vw,1rem)] font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            fullWidth
            variant="contained"
            className="!rounded-full !bg-[var(--brand)] !py-2.5 !font-bold hover:!bg-[var(--brand-dark)]"
            onClick={closeDrawer}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
