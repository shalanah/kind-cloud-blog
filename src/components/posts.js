import React from "react"
import { Link } from "gatsby"

import styled, { keyframes } from "styled-components"
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
const Li = styled.li`
  animation: ${fadeUp} ease-out 0.8s 0s both;
`

const Posts = ({ posts }) => {
  return (
    <ol
      style={{
        listStyle: `none`,
        display: "grid",
        gap: 40,
        gridTemplateRows: "auto",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {posts.map((post, i) => {
        console.log(post)
        const title = post.frontmatter.title || post.fields.slug
        return (
          <Li
            key={post.fields.slug}
            style={{ animationDelay: (i + 1) * 300 + "ms" }}
          >
            <article>
              <header>
                <h2 style={{ marginTop: 0, lineHeight: 1.35 }}>
                  <Link to={post.fields.slug}>
                    <span>{title} →</span>
                  </Link>
                </h2>
                <h5 style={{ textTransform: "none", fontWeight: "60" }}>
                  {post.frontmatter.date}
                </h5>
              </header>
            </article>
          </Li>
        )
      })}
    </ol>
  )
}

export default Posts
