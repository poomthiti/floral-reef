import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  StylesProvider,
  ThemeProvider as MUIThemeProvider,
} from '@material-ui/core/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import theme from 'src/theme'
import { MainContainer, LogoBanner, CustomTabs } from '@components'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeInOutEffect } from '@lib/utils/animation'

function MyApp({ Component, pageProps, router }: AppProps) {
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
