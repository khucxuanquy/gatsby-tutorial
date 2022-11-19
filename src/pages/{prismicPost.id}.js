import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"


const wrapPost = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const allPrismicPost = ({ data }) => {
  const post = data.prismicPost.data
  return (
    <Layout uidActive={data.prismicPost.data.category.document.uid}>
      <div style={wrapPost}>
        <img src={post.thumbnail.url} alt="" style={{ width: '230px' }} />
        <h1>{post.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </div>
    </Layout>
  )
}

export default allPrismicPost

export const query = graphql`
query postDetail($id: String) {
  prismicPost(id: {eq: $id}) {
    ...post
  }
}
`