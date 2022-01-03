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
  animation: ${fadeUp} ease-out 1s 300ms both;
`

export const PageTitle = styled.h1`
  font-size: 3.75rem;
  max-width: 700px;
  line-height: 1.1;
  margin-bottom: 1rem;
  margin-top: 0;
  margin-bottom: 4rem;
  text-transform: none;
  @media screen and (max-width: 800px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`

const PostStyles = styled.div`
  h2 {
    font-size: 2.15rem;
    margin-top: 0;
    line-height: 1.2;
    @media screen and (max-width: 800px) {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }
  }
  h5 {
    text-transform: none;
    font-weight: 60;
    font-size: 1.5rem;
    @media screen and (max-width: 800px) {
      font-size: 1.25rem;
      margin-top: 0;
    }
  }
  ol {
    list-style: none;
    display: grid;
    gap: 40px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
`

const Posts = ({ posts, title = "Kind Cloud Blog" }) => {
  return (
    <PostStyles>
      <PageTitle>{title}</PageTitle>
      <ol>
        {posts.map((post, i) => {
          console.log(post)
          const title = post.frontmatter.title || post.fields.slug
          return (
            <Li
              key={post.fields.slug}
              style={{ animationDelay: i * 500 + "ms" }}
            >
              <h2>
                <Link to={post.fields.slug}>
                  <span>
                    {title}
                    {/* {→} */}
                  </span>
                </Link>
              </h2>
              <h5>{post.frontmatter.date}</h5>
            </Li>
          )
        })}
      </ol>
    </PostStyles>
  )
}

export default Posts
