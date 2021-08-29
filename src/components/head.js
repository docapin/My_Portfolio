import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

//headタグ
export default function Head({ title }) {
  const siteData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          lang
          title
          favicon
        }
      }
    }
  `)
  return (
    <Helmet>
      <html lang={ siteData.site.siteMetadata.lang }/>
      <meta charaset="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta name="robots" content="noindex, nofollow, noarchive"/>
      <meta name="description" content={ siteData.site.siteMetadata.description }/>
      <meta property="og:title" content={ siteData.site.siteMetadata.title }/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://images.microcms-assets.io/assets/fa555f14a9bd469f8f80923c600d943e/21640d80d40a46a7bb13848754315750/portfolio_pc_01.png"/>
      <meta property="og:url" content="https://yt-portfolio.page/"/>
      <meta property="og:description" content={ siteData.site.siteMetadata.description }/>
      <meta property="og:local" content="ja_JP"/>
      <meta property="og:site_name" content={ siteData.site.siteMetadata.title }/>
      <title>{ title ? '制作実績「 ' + title + ' 」 | ' + siteData.site.siteMetadata.title : siteData.site.siteMetadata.title }</title>
      <link rel="icon" href={ siteData.site.siteMetadata.faviconSvg } type="image/svg+xml"/>
    </Helmet>
  )
}