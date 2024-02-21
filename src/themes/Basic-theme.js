import { createTheme } from "@mui/material";

export const BasicTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "rgb(243, 223, 77) !important",
          color: "black",
          borderRadius: "30px",
          fontWeight: "bold",
          textTransform: "none",
          height: "40px",
          fontSize: "1rem",
          marginBottom: "40px",
          marginTop: "0px",
          borderWidth: "2px !important"
        },
        sizeSmall: {
          width: "130px",
          height: "30px",
          margin: "0px",
        },
        sizeMedium: {
          width: "170px",
          height: "45px",
          fontSize: "1rem",
        },
        sizeLarge: {
          width: "230px",
          height: "55px",
          fontSize: "1.3rem",
        }
      },
      variants: [{
        props: {variant: 'outlined'},
        style: {
          background: "rgba(0,0,0,0) !important",
          color: "white",
          borderRadius: "30px",
          borderWidth: "2px",
          borderColor: "white !important",
          fontWeight: "bold",
          textTransform: "none",
          padding: "auto",
          marginBottom: "40px",
          marginTop: "0px",
          fontSize: "1.2rem",
        }
      }]
    },
  }
}
);
