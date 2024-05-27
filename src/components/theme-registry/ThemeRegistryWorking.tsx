"use client";

import React, { useMemo, useState, useEffect, createContext, useContext } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { createTheme } from '@mui/material/styles';

// color design tokens export
export const tokens = (mode : any) => ({
    ...(mode === 'dark'
        ? {
            grey: {
                100: '#e0e0e0',
                200: '#f5f5f5',
                300: '#a3a3a3',
                500: '#666666',
                700: '#3d3d3d',
                900: '#393939',
            },
            primary: {
                400: '#1F2A40',
                500: '#141b2d',
                1000: '#407AD6',
            },
            greenAccent: {
                500: '#4cceac',
                1200: '#00a578',
                1000: "#56930b",
                1300: "#23910a",
            },
            redAccent: {
                500: '#db4f4a',
                1000: "#ab840f",
                1100: "#d32f2f",
                1200: "#e00f0f",
                1300: "#ff0000",
            },
            blueAccent: {
                500: '#6870fa',
                1000: '#0A2558',
                1100: '#2697FF', // light blue for search button
                1200: '#176BA0',
                1300: '#6b86b8',
                1400: '#c8d9f9',
                1500: '#7b96c7',
                1600: '#9cb4e1',
                1700: "#540fab",
                1800: "#39465f",
                1900: "#6b86b83d",
                2000: "#add8e680"
            },
            whiteAccent: {
                100: '#6e6e6e6b',
                200: '#ffffff1f',
                300: '#6b86b8',
                400: '#ffffff',
            },
        }
        : {
            grey: {
                100: '#141414',
                200: '#f5f5f5',
                300: '#3d3d3d',
                500: '#666666',
                700: '#a3a3a3',
                900: '#e7e7e7',
            },
            primary: {
                400: '#FFFFFF', // manually changed
                500: '#141b2d',
                1000: '#407AD6',
            },
            greenAccent: {
                500: '#4cceac',
                1000: "#56930b",
                1200: '#00a578',
                1300: "#23910a",
            },
            redAccent: {
                500: '#db4f4a',
                1000: "#ab840f",
                1100: "#d32f2f",
                1200: "#e00f0f",
                1300: "#ff0000",
            },
            blueAccent: {
                500: '#6870fa',
                1000: '#0A2558',
                1100: '#1a428d', // light blue for search button
                1200: '#001491',
                1300: '#6b86b8',
                1400: '#c8d9f9',
                1500: '#7b96c7',
                1600: '#9cb4e1',
                1700: "#540fab",
                1800: "#39465f",
                1900: "#6b86b83d",
                2000: "#add8e680"
            },
            whiteAccent: {
                100: '#ffffff',
                200: '#ffffff1f',
                300: '#F7F9FC',
                400: '#ffffff',
            },
        }),
});

// mui theme settings
export const themeSettings = (mode: any) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    // palette values for DARK mode
                    primary: {
                        // main: colors.greenAccent[500],
                        main: colors.blueAccent[1300],
                    },
                    secondary: {
                        // main: colors.greenAccent[500],
                        main: colors.blueAccent[1400],
                    },
                    text: {
                        main: colors.whiteAccent[400],
                        // secondary: colors.greenAccent[500],
                        secondary: colors.blueAccent[1400],
                        title: colors.grey[100],
                        error: colors.redAccent[500],
                        disabled: colors.grey[500],
                    },
                    neutral: {
                        dark: colors.grey[100],
                        main: colors.grey[300],
                        light: colors.grey[700],
                    },
                    background: {
                        default: colors.primary[500],
                        main: colors.primary[400], // Sidebar
                        outer: colors.primary[500],
                        inner: colors.primary[400],
                        // box: colors.greenAccent[1200],
                        box: colors.blueAccent[1300],
                        boxActive: colors.blueAccent[1300],
                        boxInActive: colors.blueAccent[1800],
                        tableHover: colors.blueAccent[1900],
                        transBlue: colors.blueAccent[2000],
                    },
                    button: {
                        // primary: colors.primary[1000],
                        // secondary: colors.blueAccent[1100]
                        primary: colors.blueAccent[1300],
                        secondary: colors.blueAccent[1500],
                        danger: colors.redAccent[500],
                    },
                    graph: {
                        // first: colors.blueAccent[1600],
                        first: colors.blueAccent[1300],
                        second: colors.blueAccent[1200],
                        third: colors.blueAccent[500],
                    },
                    menu: {
                        primary: colors.blueAccent[1300],
                        secondary: colors.whiteAccent[200],
                    },
                    status: {
                        success: colors.greenAccent[500],
                        error: colors.redAccent[500],
                        open: colors.greenAccent[1000],
                        pending: colors.redAccent[1000],
                        closed: colors.blueAccent[1400],
                        scheduled: colors.blueAccent[1200],
                        rejected: colors.redAccent[500],
                        completed: colors.blueAccent[1200],
                        expired: colors.redAccent[1100],
                        cancelled: colors.redAccent[1200],
                    },
                    line: {
                        main: colors.grey[900],
                        bright: colors.blueAccent[1400],
                        error: colors.redAccent[1100],
                    },
                    ecg: {
                        // bg: colors.grey[200],
                        // bgStroke: colors.redAccent[1300],
                        // stroke: colors.grey[100],
                        stroke: colors.blueAccent[1300],
                    }
                }
                : {
                    // palette values for LIGHT mode
                    primary: {
                        main: colors.blueAccent[1000], // Changed with background main
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    text: {
                        main: colors.whiteAccent[100],
                        secondary: colors.blueAccent[1200],
                        title: colors.grey[100],
                        error: colors.redAccent[500],
                        disabled: colors.grey[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.whiteAccent[300], // This is working as outer color
                        main: colors.blueAccent[1000],
                        outer: colors.whiteAccent[300],
                        inner: colors.whiteAccent[100],
                        box: colors.blueAccent[1000],
                        boxActive: colors.blueAccent[1300],
                        boxInActive: colors.blueAccent[1800],
                        tableHover: colors.blueAccent[1900],
                        transBlue: colors.blueAccent[2000],
                    },
                    button: {
                        primary: colors.blueAccent[1000], // Same as backfround.main
                        secondary: colors.blueAccent[1100], // Same as backfround.main
                        danger: colors.redAccent[500],
                    },
                    graph: {
                        // first: colors.blueAccent[1000],
                        first: colors.blueAccent[1300],
                        second: colors.blueAccent[1200],
                        third: colors.blueAccent[500],
                    },
                    menu: {
                        primary: colors.blueAccent[1300],
                        secondary: colors.whiteAccent[200],
                    },
                    status: {
                        success: colors.greenAccent[500],
                        error: colors.redAccent[500],
                        open: colors.greenAccent[1000],
                        requested: colors.redAccent[1000],
                        closed: colors.blueAccent[1200],
                        scheduled: colors.blueAccent[1200],
                        rejected: colors.redAccent[500],
                        completed: colors.blueAccent[1200],
                        expired: colors.redAccent[1100],
                        cancelled: colors.redAccent[1200],
                    },
                    line: {
                        main: colors.grey[900],
                        bright: colors.blueAccent[1200],
                        error: colors.redAccent[1100],
                    },
                    ecg: {
                        // bg: colors.grey[200],
                        // bgStroke: colors.redAccent[1300],
                        // stroke: colors.grey[100],
                        stroke: colors.blueAccent[1300],
                    }
                }),
        },
        typography: {
            fontFamily: ['Poppins', 'sans-serif'].join(','),
            fontSize: 12,
            h1: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 30,
            },
            h2: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 26,
            },
            h3: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 22,
            },
            h4: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 18,
            },
            h5: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 14,
            },
            h7: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 12,
            },
            h8: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 10,
            },
        },
    };
};

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

//   const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


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
