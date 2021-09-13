import React from "react"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"

// Following https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/
const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `Tag "${tag}" (${totalCount})`
  const posts = edges.map(({ node }) => node)
  return (
    <Layout location={location}>
      <>
        <Seo title={`Tag ${tag}`} />
        <Posts posts={posts} title={tagHeader} />
        {/* Instead of an all tags page... just show all the tags here */}
        <Link to="/tags">All tags</Link>
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
          }
        }
      }
    }
  }
`
