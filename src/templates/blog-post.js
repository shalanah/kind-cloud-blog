import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

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
      <article>
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
        <p>
          {post.frontmatter.tags.map(tag => (
            <span>{tag}</span>
          ))}
        </p>
      </article>
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
