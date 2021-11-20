import React from "react"
import Seo from "../components/seo"
import { navigate, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import kebabCase from "lodash/kebabcase"

// Following https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/
const Tags = ({
  data: {
    allMarkdownRemark: { group },
  },
  location,
}) => {
  return (
    <Layout location={location}>
      <>
        <Seo title={`Tags`} />
        <p style={{ marginTop: 100 }}>
          <span style={{ marginBottom: 20, display: "block" }}>Tags</span>
          {group.map(({ fieldValue: tag, totalCount }) => (
            <button
              onClick={() => navigate(`/tags/${kebabCase(tag)}`)}
              style={{
                fontSize: "1.1rem",
                marginRight: 15,
                border: "1px solid currentColor",
                padding: ".4em 1em .5em",
                marginBottom: ".75em",
                borderRadius: "20px",
              }}
            >
              <span
                style={{ whiteSpace: "nowrap" }}
              >{`${tag} (${totalCount})`}</span>
            </button>
          ))}
        </p>
        {/* Instead of an all tags page... just show all the tags here */}
        <Link to="/tags">All tags</Link>
      </>
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
