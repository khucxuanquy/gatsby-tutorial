
import { graphql } from "gatsby"

export const query = graphql`
fragment post on PrismicPost {
  uid
  data {
    title {
      text
    }
    thumbnail {
      url
      alt
    }
    content {
      html
    }
    category {
      document {
        ... on PrismicCategory {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
}
`