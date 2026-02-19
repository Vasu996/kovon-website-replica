"use client";

import { useState } from "react";
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
  Toolbar,
  Typography
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
        backgroundColor: mode === "dark" ? "rgba(9,16,38,0.75)" : "rgba(255,255,255,0.9)",
        borderColor: "var(--line)",
        color: "var(--ink)",
        backdropFilter: "blur(14px) saturate(135%)"
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className="h-[76px] justify-between gap-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--brand)] text-white shadow-[0_10px_24px_rgba(13,99,255,0.35)]">
              <span className="text-sm font-extrabold">K</span>
            </div>
            <Typography variant="h6" className="text-[1.15rem] font-extrabold tracking-[-0.015em]">
              Kovon
            </Typography>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-[0.92rem] font-semibold text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
              >
                {item.label}
                <span className="absolute -bottom-[7px] left-0 h-[2px] w-0 bg-[var(--brand)] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <IconButton aria-label="Toggle color mode" onClick={toggleMode} size="small">
              {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
            <Button
              variant="contained"
              endIcon={<NorthEastRoundedIcon fontSize="small" />}
              className="!rounded-full !bg-[var(--brand)] !px-5 !py-2 !text-[0.82rem] !font-bold !shadow-[0_10px_22px_rgba(13,99,255,0.32)] hover:!bg-[var(--brand-dark)]"
            >
              Get Started
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <IconButton aria-label="Toggle color mode" onClick={toggleMode}>
              {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
            <IconButton aria-label="Open menu" onClick={(): void => setOpen(true)}>
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
            backgroundColor: "var(--glass-bg)",
            borderLeft: "1px solid var(--line)",
            backdropFilter: "blur(16px) saturate(130%)",
            color: "var(--ink)"
          }
        }}
      >
        <Box className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-base font-bold">Navigation</span>
            <IconButton aria-label="Close menu" onClick={closeDrawer}>
              <CloseRoundedIcon />
            </IconButton>
          </div>

          <nav className="mb-7 flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeDrawer}
                className="rounded-lg px-3 py-2 text-[0.98rem] font-medium text-[var(--ink-soft)] transition hover:bg-[var(--surface-3)] hover:text-[var(--ink)]"
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
