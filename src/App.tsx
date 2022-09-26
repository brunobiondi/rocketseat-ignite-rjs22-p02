import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './sytles/globals'
import { defaultTheme } from './sytles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Olá!</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
