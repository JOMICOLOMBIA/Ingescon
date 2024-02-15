import { BasicTheme } from "@/themes";
import "../styles/global.css";
import { CssBaseline, ThemeProvider } from "@mui/material";



function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={BasicTheme}>
        <Component {...pageProps} />
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
