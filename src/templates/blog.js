import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Blog = ({ data }) => {
  console.log(data);
  
  return (
    <Layout>
      <h1 className="mt-9">loading</h1>
    </Layout>
  )
}

export default Blog
export const pageQuery = graphql`
  query {
    markdownRemark {
      frontmatter {
        author
        date(fromNow: false)
        description
        slug
        title
      }
      html
      timeToRead
    }
  }
`
