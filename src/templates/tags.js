import React from "react"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"

// Following https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/
const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  console.log(data)
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  console.log({ tag })
  console.log({ data })
  console.log({ tag })
  console.log({ edges })
  const posts = edges.map(({ node }) => node)
  console.log(posts)
  return (
    <Layout location={location}>
      <>
        <Seo title={`Tag ${tag}`} />
        <Posts posts={posts} />
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
