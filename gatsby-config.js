require('dotenv').config({
  path: '.env'
})
module.exports = {
  siteMetadata: {
    title: `my-project`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.REPOSITORY_NAME,
        customTypesApiToken: process.env.CUSTOM_TYPES_API_TOKEN,
      }
    }
  ]
};