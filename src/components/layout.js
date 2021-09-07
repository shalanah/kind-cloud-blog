import * as React from "react"
import { Link } from "gatsby"
import StyleGlobals from "../styles/StyleGlobals"
import "../styles/fonts.css"
import styled from "styled-components"

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  position: relative;
`

const BgSvg = () => (
  <svg
    viewBox="0 0 595.3 841.9"
    style={{ position: "absolute", left: "-100%", top: "-100%" }}
  >
    <defs>
      <pattern
        patternTransform="scale(2) translate(30 30)"
        id="a"
        width="688.8"
        height="461.72"
        patternUnits="userSpaceOnUse"
        viewBox="0 0 688.8 461.7"
      >
        <g fill={"currentColor"}>
          <path d="M643,101.1c12.6,1.2,21.7,13.6,19.1,25.8-.5,1.7.2,2.6,2.1,3.1,28.1,5.9,34,46.4,7.6,59.8-68.6,9.7-140.9.6-210.7,3.5-8.6,0-15.1-4.3-19.3-11.6-9.3-14.9,1.2-35.2,18.5-36.6,1.8-.1,1.9-1,1.6-2.5-6.9-30.3,20.7-58.9,51.2-55,.6.8,1.6.4,2.5.5,2.4.1,7.7,4,9,1.5.6,0,.9-.3,1-1,4.3-2.7,7.6-7.1,11.5-10.4h0C565,57.7,605.3,63,627,90.1h0C636,103,629.3,101.4,643,101.1Z" />
          <path d="M104,461c-23.1-2.4-78.6,6.8-93-7.5-13.5-11-14.8-32.6-2.7-45.2,3.3-5.2,11.3-5.9,13-11.1,5.5-30.2,36.3-50.2,66-42.3,1.4.4,2.3.4,3.3-.8,17-21.8,54.9-8.5,55.1,19,0,1.6.5,2.1,2.1,2.2a31.7,31.7,0,0,1,31,27.4c1.6,3.4-2.6,14.6.7,14,17.1,1.3,26.4,22.5,15.5,35.7-4.7,6.2-11.1,8.7-18.8,8.7Z" />
          <path d="M139.4,208.6a2.8,2.8,0,0,0,1.5-1.5c5-3.1,11-4.8,13.4-11,1.7-3.9,5.5-6.2,8.1-9.4h0a1.6,1.6,0,0,0,1.5-1c12.2-6.2,26.4-5.9,38,2h0c5.5,5.4,10.5,11.1,11.9,19.1.2,1.1,1,1.4,2.1,1.3,10.3.4,18.7,10.4,17.5,20.8s-9.6,16.4-18.5,17.1h-59C136.7,245.1,127.3,223.4,139.4,208.6Z" />
          <path d="M475.2,285.2h2.5a45.2,45.2,0,0,1,14,5.4h0a3.4,3.4,0,0,0,2.5,2,5.5,5.5,0,0,0,2,2,3.7,3.7,0,0,0,2,2.5,1.6,1.6,0,0,0,1,1.5c1,5.2,7.2-4.2,19,0,7,4.4,11.8,11.1,10.4,19.7-1,5.2,15.9,6.6,6.6,22.6-5.9,10.6-68.4,2.9-84.4,5.1-9,.3-16-11.3-10.5-19.9a5.4,5.4,0,0,0,1.5-1.5c5.6-3.4-.9-14.4,7-26h0c5.4-6.9,12.8-12.1,21.4-13.4Z" />
          <path d="M313.8,15.6c1.6-3.8,4.1-6.6,7-9.5.9.1,1.6-.7,2-1.5A45.9,45.9,0,0,1,334.3.1c5.8-.5,11.1.8,16.5,3h0a4.4,4.4,0,0,0,3,2l6,6a1.5,1.5,0,0,0,1,1.5h0c.8,5.3,3.4,4.9,7.5,7a1,1,0,0,0,1,.5,14.5,14.5,0,0,0,3.5,3.5h0c8.5,11.8.4,29.4-14.6,28.9-12.9-.1-25.9,0-38.9,0-5.5,0-11,.5-16-2.5h0c-6.3-5.2-7.5-13.1-4.5-20.4a1.5,1.5,0,0,0,1-1.5c7.3-8.8,13.1-2.9,13-10.5A3,3,0,0,0,313.8,15.6Z" />
          <path d="M326.6,0a14.2,14.2,0,0,1-3,3A2.8,2.8,0,0,1,326.6,0Z" />
        </g>
      </pattern>
    </defs>
    <path d="M341.3,9.2a10.7,10.7,0,0,1-3,3A2.8,2.8,0,0,1,341.3,9.2Z" />
  </svg>
)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <>
      <BgSvg />
      <svg
        viewBox="0 0 100 100"
        style={{
          // outline: "1px solid red",
          position: "absolute",
          left: 20,
          opacity: 0.05,
          zIndex: -1,
          top: 0,
          width: 100,
          height: "auto",
          overflow: "visible",
        }}
      >
        <rect style={{ width: "100vw", height: "500vh" }} fill={"url(#a)"} />
      </svg>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <StyleGlobals />
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{!isRootPath && <Link to="/">← back to posts</Link>}</span>
          <Link to="/">{title}</Link>
        </header>
        <main style={{ marginTop: "15vh", flex: 1 }}>{children}</main>
        <footer
          style={{
            justifySelf: "end",
            marginTop: "12rem",
            borderTop: "1px solid currentColor",
            padding: "3rem 0 8rem ",
            fontSize: 24,
          }}
        >
          ©{new Date().getFullYear()} Shalanah Dawson
        </footer>
      </Container>
    </>
  )
}

export default Layout
