'use client';
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const lightTheme = createTheme({
    components: {
        MuiListItemText: {
          styleOverrides: {
            root: {
              "& .MuiTypography-root": {
                fontSize: '2rem',
              }
            },
          },
        },
        MuiList: {
          styleOverrides: {
            root: {
              "& .MuiMenuItem-root": {
                fontSize: '1.125rem',
              }
            },
          },
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
        error: {
            main: "#f44336",
        },
        warning: {
            main: "#ff9800",
        },
        info: {
            main: "#2196f3",
        },
        success: {
            main: "#4caf50",
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
        },
    },
    typography: {
        h1: {
            fontSize: "2.5rem",
            fontWeight: 500,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 500,
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 500,
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 500,
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 500,
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontFamily: 'var(--font-lavigne-text)',
            fontWeight: '400',
            fontStyle: 'normal',
            lineHeight: '1.2'
        },

    },
});

const darkTheme = createTheme({
    components: {
        MuiListItemText: {
          styleOverrides: {
            root: {
              "& .MuiTypography-root": {
                fontSize: '2rem',
              }
            },
          },
        },
        MuiList: {
          styleOverrides: {
            root: {
              "& .MuiMenuItem-root": {
                fontSize: '1.125rem',
              }
            },
          },
        },
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
    },
    typography: {
        h1: {
            fontSize: "2.5rem",
            fontWeight: 500,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 500,
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 500,
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 500,
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 500,
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontFamily: 'var(--font-lavigne-text)',
            fontWeight: '400',
            fontStyle: 'normal',
            lineHeight: '1.2'
        },

    },
});

export { lightTheme, darkTheme };





