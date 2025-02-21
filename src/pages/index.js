import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Index = ({ data }) => {
  const descriptionLength = 70
  data.allMarkdownRemark.edges.forEach(edge => {
    edge.node.frontmatter.description = `${edge.node.frontmatter.description.substring(
      0,
      descriptionLength
    )}...`
  })

  const { allMarkdownRemark } = data
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:my-20 my-10 md:mx-20">
        <div className="w-4/6 relative">
          <div className="md:fixed block">
            <h1 className="font-bold ml-7 md:ml-0 text-2xl md:text-xl">BuzzIt</h1>
            <blockquote className="w-72 text-sm hidden my-4 md:flex italic">
              Minimalism is not a style, it is an attitude, a way of being. It’s
              a fundamental reaction against noise, visual noise, disorder,
              vulgarity. Minimalism is the pursuit of the essence of things, not
              the appearance. <br /> – Claudio Silvestrin
            </blockquote>
            <div className="hidden md:flex flex-col items-center border border-gray-800 w-72 p-4 mt-10">
              <button className=" bg-white text-black w-full mb-4 py-2 ">Tag</button>
              <button className=" bg-gray-700 text-white w-full py-2 ">Submit a story</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-5 md:my-0">
          {allMarkdownRemark.edges.map(edge => {
            return (
              <Link to={edge.node.frontmatter.slug} className="border border-gray-800 rounded-xl w-full py-3 md:py-2 my-3" key={edge.id}>
                <div className="mx-5">
                  <h2 className="flex justify-between text-base">
                    <span>{edge.node.frontmatter.title}</span>
                    <span className="text-sm dark:bg-gray-800 rounded-full px-1">
                      {edge.node.frontmatter.date}
                    </span>
                  </h2>
                  <p className="my-3 w-full flex flex-col md:flex-row justify-between text-sm">
                    <span className="md:w-3/5 w-full">
                      {edge.node.frontmatter.description}
                    </span>
                    <span className="w-auto mt-4 md:mt-0 md:text-xs">Words by Olamide Tijani</span>
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Index
export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          timeToRead
          frontmatter {
            date
            slug
            title
            description
          }
        }
      }
    }
  }
`
export const Head = () => {
  <Seo title="" />
}