import * as React from "react"
import { Link } from "gatsby"
import StyleGlobals from "../styles/StyleGlobals"
import "../styles/fonts.css"
import styled from "styled-components"

const Header = styled.div`
  font-size: 1.75rem;
  @media screen and (max-width: 800px) {
    font-size: 1.1rem;
  }
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  @media screen and (max-width: 800px) {
    margin: 1rem auto;
    padding: 1rem;
  }
  footer {
    justify-self: end;
    margin-top: max(15vh, 150px);
    padding: 2rem 0 0;
    font-size: 1.2rem;
    font-weight: 60;
  }
`

const Layout = ({ children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
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
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            <a href="https://kindcloud.app" as="a">
              ← kindcloud.app
            </a>
          </span>
          <Link to="/">blog home</Link>
        </Header>
        <main style={{ marginTop: "15vh", flex: 1 }}>{children}</main>
        <footer>
          <div style={{ fontWeight: "60" }}>
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
              Kind Cloud App
            </a>{" "}
            - A sound-free, loving-kindness meditation app{" "}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            Keep Kind Cloud Alive
            <br />
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
          <div style={{ marginTop: "2rem" }}>
            ©2020–{new Date().getFullYear()} Shalanah LLC
          </div>
        </footer>
      </Container>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var sc_project = 12456776;
            var sc_invisible = 1;
            var sc_security = '1d702d3f';
            `,
        }}
      />
      <script
        type="text/javascript"
        src="https://www.statcounter.com/counter/counter.js"
        async
      />
    </div>
  )
}

export default Layout
