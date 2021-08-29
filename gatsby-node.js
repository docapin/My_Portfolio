const path = require('path')

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMicrocmsDesign {
        edges {
          node {
            designId
            title
            thumbnail {
              url
            }
          }
          next {
            designId
            title
          }
          previous {
            designId
            title
          }
        }
      }
      allMicrocmsWebsite {
        edges {
          node {
            websiteId
            title
            thumbnail {
              url
            }
          }
          next {
            websiteId
            title
          }
          previous {
            websiteId
            title
          }
        }
      }
      allMicrocmsOthers {
        edges {
          node {
            othersId
            title
            thumbnail {
              url
            }
          }
          next {
            othersId
            title
          }
          previous {
            othersId
            title
          }
        }
      }
    }
  `)

  const pageData = result.data

  Object.keys(pageData).forEach(rootKey => {
    const root = rootKey.replace('allM', 'm')
    pageData[rootKey].edges.forEach(({ node }, i) => {
      const pathId = Object.keys(node).find(key => key.indexOf('Id') != -1)
      createPage({
        path: node[pathId],
        component: path.resolve(`./src/template/works_article.js`),
        context: {
          root: root,
          contentId: node[pathId],
          next: (pageData[rootKey].edges[i].next ? pageData[rootKey].edges[i].next : null),
          previous: (pageData[rootKey].edges[i].previous ? pageData[rootKey].edges[i].previous : null)
        }
      })
    })
  })
}