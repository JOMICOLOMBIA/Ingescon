import { createTheme } from "@mui/material";

export const BasicTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "rgb(251,219,4) !important",
          color: "black",
          borderRadius: "30px",
          fontWeight: "bold",
          textTransform: "none",
          padding: "5px 20px",
          height: "40px",
          fontSize: "1rem",
          marginBottom: "40px",
          marginTop:"0px",
        },
        sizeSmall: {
          width: "130px",
          height: "30px",
          margin: "0px",
        },
        sizeMedium: {
          width: "170px",
          fontSize: "15px",
          margin: "0px",
        },
        sizeLarge: {
          width: "170px",
          height: "45px",
          fontSize: "1rem",
        }
      },
    },
  }
}
);
