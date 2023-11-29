import { createTheme } from "@mui/material"

export const BasicTheme = createTheme({
    typography: {
      h1: {
        fontSize: "50px",
      }
    },
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
          textTransform: "capitalize"
        },
      }
    },
  }
});