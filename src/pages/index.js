import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log(data.allPrismicPost)
  return (
    <Layout>
      {
        data.allPrismicPost.nodes?.map(({ data, uid }, index) => (
          <article key={index}>
            <h2>{data.category.document.data.title.text}</h2>
            <img src={data.thumbnail.url} alt={data.thumbnail.alt} />
            <h1>
              <Link to={'/post/' + uid}>{data.title.text}</Link>
            </h1>
          </article>
        ))
      }
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query queryAllPost {
  allPrismicPost {
    nodes {
      ...post
    }
  }
}
`
