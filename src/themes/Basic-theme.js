import { createTheme } from "@mui/material"

export const BasicTheme = createTheme({
    components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(rgba(255, 217, 0, 0.612), white)",
          color: "black",
          width: "150px",
          borderRadius: "30px",
          fontWeight: "bold",
          textTransform: "none"
        },
        sizeMedium: {
          width: "150px"
        },
        sizeLarge: {
          width: "250px"
        }
      }
    },
    h1: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          color: "red",
        }
      }
      },
    }
  }
);