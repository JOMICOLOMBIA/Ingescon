import { BasicTheme } from "@/themes";
// import "../styles/global.css";
import { CssBaseline, ThemeProvider } from "@mui/material";


export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={BasicTheme}>

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
