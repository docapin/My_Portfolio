import React from 'react'
import TitleName from './title_name'
import pageScroll from './scrollEvent'
import { useStaticQuery, graphql } from 'gatsby'

export default function MainVisual() {
  const authorData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            description02
            title
          }
        }
      }
    `
  )

  return (
    <section className="l-mv">
      <div className="p-mv">
        <div className="p-mv__title">
          <h1 className="p-mv__title-logo" role="img" aria-label={ authorData.site.siteMetadata.title }><TitleName/></h1>
        </div>
        <nav className="p-mv__menu">
          <button className="p-mv__menu-btn" onClick={() => pageScroll('#profile')}>
            <span className="p-mv__menu-btn-label">Profile</span>
            <span className="p-mv__menu-btn-text">自己紹介</span>
          </button>
          <button className="p-mv__menu-btn" onClick={() => pageScroll('#works')}>
            <span className="p-mv__menu-btn-label">Works</span>
            <span className="p-mv__menu-btn-text">制作実績</span>
          </button>
        </nav>
        <button className="p-mv__scroll-btn" onClick={() => pageScroll('#profile')}>Scroll</button>
      </div>
    </section>
  )
}