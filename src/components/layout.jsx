import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="min-h-screen flex flex-col px-2 md:px-24">
      <div className="flex-1">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="">{children}</main>
      </div>
    </div>
  )
}

export default Layout
