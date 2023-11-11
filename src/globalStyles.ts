import { css, SerializedStyles } from "@emotion/react"
import normalize from "polished/lib/mixins/normalize"
import { ThemeT } from "presentation/context/ThemeProvider/theme/types"

const fontsCss = (theme: ThemeT): SerializedStyles => css`
  html,
  body {
    font-family: ${theme.font.family.arial}, "Helvetica", sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`

const globalCss = (theme: ThemeT): SerializedStyles => css`
  ${normalize()};
  ${fontsCss(theme)};

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: 16px;
    line-height: 1.2;
  }

  body {
    --container-gutter: 60px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  p,
  h4,
  h3,
  h2,
  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  input::-ms-clear {
    display: none;
  }
`

export default globalCss
