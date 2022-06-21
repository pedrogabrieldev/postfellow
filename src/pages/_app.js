import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import GlobalStyles from '../styles/global'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
