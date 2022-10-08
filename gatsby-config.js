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
        repositoryName: 'jonah-go-dev',
        customTypesApiToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImpvbmFoLWdvLWRldi1jMmEzNDQ3YS04YzA0LTRhZjgtODliMS0zZGNiNTRjNjJmN2VfNCIsImRhdGUiOjE2NjUxNTYxMDAsImRvbWFpbiI6ImpvbmFoLWdvLWRldiIsImlhdCI6MTY2NTE1NjEwMH0.i-YCY61Y8TortuvJh-lrHzblXRruxvSR4JxA3ZYMWYE'
      }
    }
  ]
};