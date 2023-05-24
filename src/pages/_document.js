import Navbar from '<prefix>/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
