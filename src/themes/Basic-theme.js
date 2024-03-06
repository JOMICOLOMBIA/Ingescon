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
          fontFamily: "Exo-SB",
          textTransform: "none",
          height: "40px",
          fontSize: "1rem",
          marginBottom: "40px",
          marginTop: "0px",
          borderWidth: "2px !important"
        },
        sizeSmall: {
          width: "110px",
          height: "30px",
          margin: "0px",
          fontSize: ".75rem"
        },
        sizeMedium: {
          width: "175px",
          height: "42px",
          fontSize: ".85rem",
          padding: "0",
        },
        sizeLarge: {
          width: "240px",
          height: "55px",
          fontSize: "1.2rem",
          padding: "0",
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
          marginBottom: "40px",
          marginTop: "0px",
        }
      }]
    },
  }
}
);
