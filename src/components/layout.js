import * as React from "react"
import { Link } from "gatsby"
import StyleGlobals from "../styles/StyleGlobals"
import "../styles/fonts.css"
import styled, { keyframes } from "styled-components"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  @media screen and (max-width: 800px) {
    margin: 1rem auto;
    padding: 1rem;
  }
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

const Layout = ({ location, children }) => {
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
          <Link to="/">kindcloud.blog</Link>
        </header>
        <main style={{ marginTop: "15vh", flex: 1 }}>{children}</main>
        <footer
          style={{
            justifySelf: "end",
            marginTop: "max(25vh, 200px)",
            padding: "2rem 0 0",
            fontSize: 16,
            fontWeight: "60",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "60", fontSize: "1.2rem" }}>
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
              Try Kind Cloud
            </a>{" "}
            - A sound-free, loving-kindness meditation app{" "}
          </div>
          <div style={{ marginTop: ".5rem", fontSize: "1.2rem" }}>
            <a
              href={"https://www.buymeacoffee.com/kindcloud"}
              target={"_blank"}
              rel="noreferrer"
              style={{
                fontWeight: 100,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Buy Kind Cloud a Coffee 🌈 ☕️
            </a>
          </div>
          <div style={{ marginTop: "2rem", ontSize: "1.2rem" }}>
            ©{new Date().getFullYear()} Shalanah Dawson
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Layout
