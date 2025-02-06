/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              date
              slug
              title
            }
          }
        }
      }
    }
  `)
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.slug}`,
        component: require.resolve("./src/templates/blog.js"),
        context: {
         
        },
      })
    })
}
