import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

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
    <div className="min-h-screen mt-12 flex">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="flex-1">{children}</main>
      <footer> hello </footer>
    </div>
  )
}

export default Layout
