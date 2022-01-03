import * as React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled, { keyframes } from "styled-components"
import kebabCase from "lodash/kebabcase"

const Pag = styled.ul`
  font-size: 22px;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
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

const Article = styled.article`
  opacity: 0;
  animation: ${fadeUp} ease-out 0.8s 650ms both;
  h1 {
    font-size: 3.75rem;
    max-width: 700px;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin-top: 0;
    margin-bottom: 1rem;
    @media screen and (max-width: 800px) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  }
  h3 {
    font-size: 2.5rem;
    text-transform: none;
    @media screen and (max-width: 800px) {
      font-size: 2rem;
    }
  }
  h4 {
    font-size: 2rem;
    text-transform: none;
    @media screen and (max-width: 800px) {
      font-size: 1.75rem;
    }
  }
  h5 {
    font-size: 1.5rem;
    text-transform: none;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    @media screen and (max-width: 800px) {
      font-size: 1.25rem;
    }
  }
  h6 {
    font-size: 1.5rem;
    text-transform: none;
  }
  p {
    font-weight: 60;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    @media screen and (max-width: 800px) {
      font-size: 1.3rem;
    }
  }
  p {
    + h3,
    + h4 {
      margin-top: 3rem;
    }
  }
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <h5>{post.frontmatter.date}</h5>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <h5>
          May you be filled with loving-kindness. ❤️🌈
          <br />
          <br />
          - Kind Cloud
          <br />
          <a
            href={"https://kindcloud.app"}
            style={{ textDecoration: "underline", textUnderlineOffset: 3 }}
            target={"_blank"}
          >
            kindcloud.app
          </a>
        </h5>
        <p style={{ marginTop: 100 }}>
          <span style={{ marginBottom: 20, display: "block" }}>Tags</span>
          {post.frontmatter.tags.map(tag => (
            <button
              className="tag"
              onClick={() => navigate(`/tags/${kebabCase(tag)}`)}
            >
              <span style={{ whiteSpace: "nowrap" }}>{tag}</span>
            </button>
          ))}
        </p>
      </Article>
      <nav>
        <Pag
          style={{
            marginTop: "8rem",
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,

            textTransform: "none",
          }}
        >
          <li style={{ flex: 1 }}>
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                style={{ display: "flex", gap: 10 }}
              >
                <span>←</span>
                <span>{previous.frontmatter.title}</span>
              </Link>
            )}
          </li>
          {next && (
            <li style={{ flex: 1, textAlign: "right" }}>
              <Link
                to={next.fields.slug}
                rel="next"
                style={{ display: "flex", gap: 10 }}
              >
                <span>{next.frontmatter.title}</span>
                <span>→</span>
              </Link>
            </li>
          )}
        </Pag>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
