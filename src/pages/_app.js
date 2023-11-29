import { BasicTheme } from '@/themes'
import { CssBaseline, ThemeProvider} from '@mui/material'



export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={BasicTheme} >
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
};
