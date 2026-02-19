"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type Mode = "light" | "dark";

interface ColorModeContextValue {
  mode: Mode;
  toggleMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined);

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProvider = ({ children }: AppThemeProviderProps): JSX.Element => {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("kovon-mode");
    if (stored === "light" || stored === "dark") {
      setMode(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setMode(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("kovon-mode", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const toggleMode = (): void => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#0d63ff"
          },
          secondary: {
            main: "#00b38f"
          }
        },
        shape: {
          borderRadius: 14
        },
        typography: {
          fontFamily: "var(--font-body), 'Segoe UI', sans-serif",
          h1: {
            fontFamily: "var(--font-display), 'Trebuchet MS', sans-serif"
          },
          h2: {
            fontFamily: "var(--font-display), 'Trebuchet MS', sans-serif"
          },
          h3: {
            fontFamily: "var(--font-display), 'Trebuchet MS', sans-serif"
          }
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = (): ColorModeContextValue => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within AppThemeProvider");
  }
  return context;
};

export default AppThemeProvider;
