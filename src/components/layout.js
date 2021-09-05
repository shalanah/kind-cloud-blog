import * as React from "react"
import { Link } from "gatsby"
import StyleGlobals from "../styles/StyleGlobals"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  if (isRootPath) {
    header = (
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = <Link to="/">{title}</Link>
  }

  return (
    <div data-is-root-path={isRootPath}>
      <StyleGlobals />
      <header>{header}</header>
      <main>{children}</main>
      <footer>©{new Date().getFullYear()} Shalanah Dawson</footer>
    </div>
  )
}

export default Layout
