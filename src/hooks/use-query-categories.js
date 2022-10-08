import { useStaticQuery, graphql } from "gatsby"

export default () => useStaticQuery(
  graphql`
  {
    allPrismicCategory {
      nodes {
        uid
        data {
          title {
            text
          }
        }
      }
    }
  }
  
  `
)