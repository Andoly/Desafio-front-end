import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Challenge - Auvo</title>
        <link rel="shortcut icon" href="/assets/logo_purple.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Desafio 1 para vaga de dev front-end react (Auvo Tecnólogia)"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
