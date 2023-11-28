import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const defaultTheme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
  }
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme} >
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
};
