import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { heartColors } from "../utils"

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
  border: 2px solid #a9cdf3;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1.25em;
  cursor: pointer;
  animation: ${fadeUp} ease-out 0.75s 0ms both;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &:hover {
    background: ${({ i }) => heartColors[i % heartColors.length] + "22"};
    border: 2px solid ${({ i }) => heartColors[i % heartColors.length]};
    color: ${({ i }) => heartColors[i % heartColors.length]};
  }
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
    gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
`

const Posts = ({ posts, title = "Kind Cloud Blog" }) => {
  return (
    <PostStyles>
      <PageTitle>{title}</PageTitle>
      <ol>
        {posts.map((post, i) => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <Link
              to={post.fields.slug}
              key={post.fields.slug}
              style={{ display: "flex" }}
            >
              <Li i={i} style={{ animationDelay: i * 400 + "ms" }}>
                <h2>
                  <span>{title}</span>
                </h2>
                <h5>{post.frontmatter.date}</h5>
              </Li>
            </Link>
          )
        })}
      </ol>
    </PostStyles>
  )
}

export default Posts
