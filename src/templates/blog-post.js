import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
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

const Article = styled.article`
  opacity: 0;
  animation: ${fadeUp} ease-out 0.8s 650ms both;
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
          <h5
            style={{
              textTransform: "none",
              marginBottom: "4.5rem",
              marginTop: "1.5rem",
            }}
          >
            {post.frontmatter.date}
          </h5>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>
          May you be filled with loving-kindness. 💙
          <br />- Kind Cloud
        </p>
        <p style={{ marginTop: 100 }}>
          <span style={{ marginBottom: 20, display: "block" }}>Tags</span>
          {post.frontmatter.tags.map(tag => (
            <button
              style={{
                fontSize: "1.1rem",
                marginRight: 15,
                border: "1px solid currentColor",
                padding: ".4em 1em .5em",
                marginBottom: ".75em",
                borderRadius: "20px",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>{tag}</span>
            </button>
          ))}
        </p>
      </Article>
      <nav>
        <ul
          style={{
            marginTop: "8rem",
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            fontSize: 22,
            textTransform: "none",
          }}
        >
          <li style={{ flex: 1 }}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          {next && (
            <li style={{ flex: 1, textAlign: "right" }}>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
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
