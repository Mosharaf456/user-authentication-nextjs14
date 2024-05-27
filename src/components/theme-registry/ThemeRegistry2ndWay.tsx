"use client";

import React, { useMemo, useState, useEffect, createContext, useContext } from 'react';
import { ThemeProvider , CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/components/theme/theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeRegistry({ children } : { children: React.ReactNode}) {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
          {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// Custom hook to use color mode
export const useColorMode = () => {
  return useContext(ColorModeContext);
};
