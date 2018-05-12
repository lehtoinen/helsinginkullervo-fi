require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        // postCssPlugins: [],
        precision: 8, // SASS default: 5
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Helsingin Kullervo',
        short_name: 'Kultsi',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#d52c27',
        display: 'minimal-ui',
        icon: 'src/assets/img/kullervo_logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify',
  ],
  proxy: {
    prefix: '/fixtures',
    url: 'http://localhost:9000/getFixtures',
  },
};
