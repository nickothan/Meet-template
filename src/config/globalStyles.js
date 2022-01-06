import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    border: none;
    outline: none;
    font: inherit;
    vertical-align: baseline;
    
  }

    article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: ${({ theme }) => {
      theme.fonts ? theme.fonts : ""
    }};
    font-size: 18px;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1 {
    font-size: 34px;
  }

  h2 {
    font-size: 48px;
    font-weight: 600;
    margin: 20px 0;
  }

  p{
    font-size: 18px;
    color: red;
  }
`
