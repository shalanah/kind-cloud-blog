import * as React from "react"
import { Link } from "gatsby"
import StyleGlobals from "../styles/StyleGlobals"
import "../styles/fonts.css"
import styled, { keyframes } from "styled-components"

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  position: relative;
`

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
   opacity: 1;
   transform: translateY(0px);
  }
`

const LinkContainer = styled.div`
  animation: ${fadeUp} ease-out 0.8s 0ms both;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div
      style={{
        background: `url(/clouds.svg) repeat`,
        backgroundSize: "1033.2px 692.55px",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <StyleGlobals />
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            {!isRootPath && (
              <LinkContainer>
                <Link to="/">← back to posts</Link>
              </LinkContainer>
            )}
          </span>
          <Link to="/">{title}</Link>
        </header>
        <main style={{ marginTop: "15vh", flex: 1 }}>{children}</main>
        <footer
          style={{
            justifySelf: "end",
            marginTop: "35vh",
            padding: "3rem 0 8rem ",
            fontSize: 24,
            fontWeight: "60",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "60" }}>
            Loving-kindness meditation app
            <br />
            <a
              href={"https://kindcloud.app"}
              rel="noreferrer"
              target={"_blank"}
              style={{
                fontWeight: 100,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Kind Cloud
            </a>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href={"https://www.buymeacoffee.com/kindcloud"}
              target={"_blank"}
              rel="noreferrer"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Buy Kind Cloud a Coffee 🌈 ☕️
            </a>
          </div>
          <div style={{ marginTop: "1.5rem", fontSize: ".8em" }}>
            ©{new Date().getFullYear()} Shalanah Dawson
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Layout
