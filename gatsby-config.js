require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: { //metadata
    title: process.env.TITLE,
    lang: 'ja',
    description: process.env.DESCRIPTION,
    description02: process.env.DESCRIPTION_02,
    author: process.env.AUTHOR_EN,
    favicon: `/favicon.svg`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: `src`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
          layout: require.resolve(`./src/components/wrapper.js`)
        }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          outputStyle: `expanded`
        },
      },
    },
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.API_KEY,
        serviceId: process.env.SERVICE_ID,
        apis: [
          {
            endpoint: `design`,
          },
          {
            endpoint: `website`,
          },
          {
            endpoint: `others`,
          },
          {
            endpoint: `profile`,
          },
        ],
      },
    },
  ],
}
