import { BasicTheme } from "@/themes";
import "../styles/global.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import "../config/i18next.config";

import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={BasicTheme}>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {}, // Deshabilitar SSR para esta página
  };
};
export default App;
