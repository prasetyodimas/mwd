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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallerys`,
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
        name: `MWD ( Machinery Warehouse Departement )`,
        short_name: `MWD`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/brand-square.jpeg`
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
