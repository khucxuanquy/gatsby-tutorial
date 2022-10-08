
import { graphql } from "gatsby"

export const query = graphql`
fragment category on PrismicCategory {
  uid
    data {
      description {
        text
      }
      title {
        text
      }
    }
}
`