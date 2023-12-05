import { createTheme } from "@mui/material";

export const BasicTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(rgba(215,173,92,255), rgba(233, 204, 154, 255))",
          color: "black",
          borderRadius: "30px",
          fontWeight: "bold",
          textTransform: "none",
          padding: "5px 20px",
          height: "40px",
          fontSize: "1rem"
        },
        sizeSmall: {
          width: "135px",
        },
        sizeMedium: {
          width: "140px",
          fontSize: "15px",
        },
        sizeLarge: {
          width: "250px",
          height: "55px",
          fontSize: "1.2rem",
        }
      },
    },
  }
}
);
