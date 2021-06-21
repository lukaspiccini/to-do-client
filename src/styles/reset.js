import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
    * {
      box-sizing: border-box
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
    }

    h1,h2,h3,h4,h5,h6,p {
      padding: 0;
      margin: 0;
      border: 0;
      box-sizing: border-box;
    }

    ol, ul {
      list-style: none;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
`