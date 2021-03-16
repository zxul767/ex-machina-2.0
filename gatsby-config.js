module.exports = {
  siteMetadata: {
    title: `Ex-Machina`,
    name: `Ex-Machina`,
    siteUrl: `https://zxul767.dev`,
    description: `Programming, data science, machine learning and cryptocurrencies!`,
    hero: {
      heading: `Welcome to Ex-Machina.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/zxul767`,
      },
      {
        name: `github`,
        url: `https://github.com/zxul767`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/wgomezj`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ex-Machina`,
        short_name: `Ex-Machina`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
