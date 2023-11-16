const config = require('gatsby-plugin-config').default;

module.exports = {
  siteMetadata: {
    title: `Takenaka`,
    description: `.`,
    author: `Aris Prasetyo`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Takenaka Apps`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `z5ke27r0a6b7`,
        accessToken: `2zcXhtqxJEYcTcMmEHW3dd8Rqe3H2rCyIudJmRWZ2NQ`,
      },
    }
  ],
}
