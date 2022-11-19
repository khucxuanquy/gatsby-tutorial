const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query {
      allPrismicCategory {
        nodes {
          uid
        }
      }
    }
  `)

  data.allPrismicCategory.nodes.forEach(node => {
    actions.createPage({
      path: 'jonah-go-dev/' + node.uid,
      component: path.resolve('src/templates/jonah-go-dev.js'),
      context: {
        uid: node.uid
      }
    })
  });
}