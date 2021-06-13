import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  StylesProvider,
  ThemeProvider as MUIThemeProvider,
} from '@material-ui/core/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import theme from 'src/theme'
import { MainContainer, LogoBanner } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <MainContainer>
            <LogoBanner />
            <Component {...pageProps} />
          </MainContainer>
        </EmotionThemeProvider>
      </MUIThemeProvider>
    </StylesProvider>
  )
}
export default MyApp
