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
            backgroundColor: "white",
            color: "black",
            width: "200px",
          },
        }
      }
    }
  });