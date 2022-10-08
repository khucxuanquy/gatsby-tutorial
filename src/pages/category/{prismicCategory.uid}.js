import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

const Category = ({ data }) => {
  console.log(data)
  return (
    <Layout uidActive={data.prismicCategory.uid}>
      {
        data.allPrismicPost.nodes?.map(({ data, uid }, index) => (
          <article key={index}>
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

export default Category

export const query = graphql`
query categoryDetail($uid: String) {
  prismicCategory(uid: {eq: $uid}) {
    ...category
  }
  allPrismicPost(filter: {data: {category: {uid: {eq: $uid}}}}) {
    nodes {
      ...post
    }
  }
}

`
