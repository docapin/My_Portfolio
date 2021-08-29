import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Footer() {
  const authorData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `
  )

  return(
    <footer className="l-footer">
      <p className="p-footer__copyright">&copy; {new Date().getFullYear()} { authorData.site.siteMetadata.author }</p>
    </footer>
  )
}