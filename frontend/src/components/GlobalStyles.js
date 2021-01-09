import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Merriweather', serif;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyles
