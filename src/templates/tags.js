import React from "react"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"

// Following https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/
const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  console.log({ pageContext })
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: ".7em", // just a little smaller than normal titles since they can get long
        flexWrap: "wrap",
      }}
    >
      <span>{`Tag "${tag}"`}</span>
      <span
        style={{
          display: "inline-flex",
          fontSize: "1em",
          color: "#12112A",
          background: "#A9CDF3",
          borderRadius: "1000px",
          minWidth: "1em",
          height: "1em",
          lineHeight: 0,
          fontWeight: 160,
        }}
      >
        <span style={{ margin: "auto", fontSize: ".6em" }}>{totalCount}</span>
      </span>
    </span>
  )
  const posts = edges.map(({ node }) => node)
  console.log(posts)
  return (
    <Layout location={location}>
      <>
        <Seo title={`Tag ${tag}`} />
        <Posts posts={posts} title={tagHeader} />
        <div style={{ marginTop: "2rem" }}>
          <Link to="/tags" className="tag">
            All tags
          </Link>
        </div>
      </>
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`
