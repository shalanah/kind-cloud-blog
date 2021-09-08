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
const Li = styled.li`
  animation: ${fadeUp} ease-out 0.8s 0s both;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol
        style={{
          listStyle: `none`,
          display: "grid",
          gap: 40,
          gridTemplateRows: "auto",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {posts.map((post, i) => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <Li
              key={post.fields.slug}
              style={{ animationDelay: (i + 1) * 300 + "ms" }}
            >
              <article>
                <header>
                  <h2 style={{ marginTop: 0 }}>
                    <Link to={post.fields.slug}>
                      <span>{title} →</span>
                    </Link>
                  </h2>
                  <h5 style={{ textTransform: "none" }}>
                    {post.frontmatter.date}
                  </h5>
                </header>
              </article>
            </Li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
