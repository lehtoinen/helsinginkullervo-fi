require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const competition_id = 'etejp20';

module.exports = {
  siteMetadata: {
    injectData: {
      title: 'Helsingin Kullervo',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        showInProduction: false,
        axeOptions: {},
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'fi',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Helsingin Kullervo`,
        short_name: `Kullervo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/img/kullervo_favicon.svg`,
        cache_busting_mode: `query`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true,
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-torneopal',
      options: {
        api: 'https://spl.torneopal.fi/taso/rest/',
        key: process.env.TORNEOPAL_API_KEY,
        club_id: process.env.TORNEOPAL_CLUB_ID,
        competition_id: process.env.TORNEOPAL_COMPETITION_ID,
      },
    },
  ],
};
