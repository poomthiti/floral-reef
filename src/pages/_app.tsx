import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  StylesProvider,
  ThemeProvider as MUIThemeProvider,
} from '@material-ui/core/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import theme from 'src/theme'
import { MainContainer, LogoBanner, CustomTabs } from '@components'
import { useEffect } from 'react'
import '@lib/utils/marker.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  const storePath = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem('prevPath', window.location.pathname)
    }
  }
  useEffect(() => storePath, [router.asPath])

  return (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <MainContainer>
            <LogoBanner />
            <CustomTabs />
            <Component {...pageProps} key={router.pathname} />
          </MainContainer>
        </EmotionThemeProvider>
      </MUIThemeProvider>
    </StylesProvider>
  )
}
export default MyApp
