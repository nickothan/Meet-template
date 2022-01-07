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
    display: block;
    height: 100vh;
    line-height: 1;
    font-family: ${({ theme }) => theme.fonts.sen}
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
    content: none;
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1 {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.inter}
  }
  
  p{
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
    
    font-family: ${({ theme }) => theme.fonts.sen};
    font-weight: 600;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.sen};
    font-weight: 600;
  }
`
