import { useStaticQuery, graphql } from "gatsby"

export default function UseQueryCategories() {
  return useStaticQuery(
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
} 