import * as React from "react"
import { Link } from "gatsby"
import StyleGlobals from "../styles/StyleGlobals"
import "../styles/fonts.css"
import styled from "styled-components"

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
`

const cloudsSvgData = [
  {
    viewBox: "0 0 15.09 9.82",
    d: "M3.9,9.78a2.81,2.81,0,0,1-.5,0,3.35,3.35,0,0,1-.83-6.61,5,5,0,0,1,9.56.89h.07a2.86,2.86,0,1,1,0,5.72H3.9Z",
  },
  {
    viewBox: "0 0 29.45 17.45",
    d: "M26.06,17.45H4.66A4.68,4.68,0,0,1,3.1,8.37,7.94,7.94,0,0,1,13.2,1.82,4.61,4.61,0,0,1,16.87,0a4.69,4.69,0,0,1,4.65,4.74h.19a4.73,4.73,0,0,1,4.72,4.74,4.83,4.83,0,0,1-.2,1.37,3.3,3.3,0,0,1-.11,6.6Z",
  },
  {
    viewBox: "0 0 15.45 9.45",
    d: "M13.57,9.45H2A2,2,0,0,1,0,7.47,2,2,0,0,1,1,5.75a4.9,4.9,0,0,1-.11-1A4.69,4.69,0,0,1,5.53,0,4.63,4.63,0,0,1,9.62,2.48a2.66,2.66,0,0,1,1.63-.56A2.75,2.75,0,0,1,14,4.73a3,3,0,0,1-.11.79,2,2,0,0,1-.27,3.93Z",
  },
  {
    viewBox: "0 0 11.82 7.82",
    d: "M8.8,7.79a2.34,2.34,0,0,0,.38,0,2.67,2.67,0,0,0,.64-5.26,3.9,3.9,0,0,0-7.5.67H2.26a2.3,2.3,0,0,0,0,4.59H8.8Z",
  },
  {
    viewBox: "0 0 25.45 13.09",
    d: "M2.52,13.09H22.18a3.3,3.3,0,0,0,.53-6.56,2.47,2.47,0,0,0,.1-.67A2.22,2.22,0,0,0,20.6,3.62a2.33,2.33,0,0,0-.7.11A6.56,6.56,0,0,0,8.75,2.61a4.77,4.77,0,0,0-1.82-.37A4.69,4.69,0,0,0,2.42,8.11a2.49,2.49,0,0,0,.1,5Z",
  },
]

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <Container>
      <StyleGlobals />
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{!isRootPath && <Link to="/">← back to posts</Link>}</span>
        <Link to="/">{title}</Link>
      </header>
      <main style={{ marginTop: "15vh" }}>{children}</main>
      <footer>©{new Date().getFullYear()} Shalanah Dawson</footer>
    </Container>
  )
}

export default Layout
