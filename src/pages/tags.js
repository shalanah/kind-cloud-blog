import React from "react"
import Seo from "../components/seo"
import { navigate, graphql } from "gatsby"
import Layout from "../components/layout"
import kebabCase from "lodash/kebabcase"
import { PageTitle } from "../components/posts"

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
        <PageTitle>Tags</PageTitle>
        <div style={{ lineHeight: 1 }}>
          {group.map(({ fieldValue: tag, totalCount }) => (
            <button
              className="tag"
              onClick={() => navigate(`/tags/${kebabCase(tag)}`)}
            >
              <span
                style={{ whiteSpace: "nowrap" }}
              >{`${tag} – ${totalCount}`}</span>
            </button>
          ))}
        </div>
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
