import { createGlobalStyle } from "styled-components"

const meyerReset = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
  }
  body {
  line-height: 1;
  }
  ol, ul {
  list-style: none;
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  }
`
const buttonReset = `
button {
  border: none;
  background: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}
`
const formResets = `
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    user-select: none
    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable input types in iOS */
    -webkit-appearance: none;
  }

  /* Remove excess padding and border in Firefox 4+ */
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  button, select {
    cursor: pointer;
  }
  button:focus, select:focus {
    outline: none;
  }

  select {
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }
`

const positioning = `
  body, html {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #___gatsby, #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }
  .pos-full {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .pos-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .pos-horiz-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const boxSizing = `
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const removeTapHighlight = `
  body {
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  }
`

export const StyleGlobals = createGlobalStyle`
  ${meyerReset}
  ${positioning}
  ${boxSizing}
  ${removeTapHighlight}
  ${formResets}
  ${buttonReset}
  .pointer-events-none-important {
    pointer-events: none !important;
    * {
      pointer-events: none !important;
    }
  }
  html, body, button {
    font-family: strokeweight, sans-serif;
    font-weight:  100;
    line-height: 1.5;
  }
  html, body {
    height: 100%;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: currentColor;
  }
  body {
    font-weight: 100;
    font-size: 2rem;
    background: #12112A;
    color: #A9CDF3;
    font-family: strokeweight;
    line-height: 1.45;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 160;
    margin-top: 1rem;
    text-transform: lowercase;
  }
  p {
    font-size: 1.8rem;
    margin-top: 2rem;
    a {
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: .2s;
    :hover {
      color: #fff;
    }
  }
}
  h1 {
    font-size: 3.75rem;
    max-width: 700px;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .tag {
    font-size: 1.1rem;
    margin-right: 15;
    background: #22233e;
    padding: .4em 1em .5em;
    margin-bottom: .75em;
    border-radius: 20px;
    margin-right: 15px;
    transition: .2s;
    &:hover {
      background: #313353;
    }
  }
  
`

export default StyleGlobals
