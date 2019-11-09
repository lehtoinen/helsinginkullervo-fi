require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    'gatsby-plugin-sass',
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
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-torneopal',
      options: {
        api: 'https://spl.torneopal.fi/taso/rest/',
        key: process.env.TORNEOPAL_API_KEY,
        queries: [
          {
            method: 'getMatches',
            options: {
              // season_id: '2018-19',
              club_id: 571,
              competition_id: 'etefs1920',
            },
          },
          {
            method: 'getGroup',
            injectData: {
              title: 'Futsal harrastekakkonen, lohko 3',
            },
            options: {
              competition_id: 'etefs1920', // Uusimaa futsal 2019-20
              category_id: 'FMH2', // Miehet Futsal Harrastekakkonen
              group_id: '3', // lohko 3
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            injectData: {
              title: 'Futsal harrastekakkonen, lohko 1',
            },
            options: {
              competition_id: 'etefs1920', // Uusimaa futsal 2019-20
              category_id: 'FMH2', // Miehet Futsal Harrastekakkonen
              group_id: '1', // lohko 1
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            injectData: {
              title: 'Futsal Vitonen',
            },
            options: {
              competition_id: 'etefs1920', // Uusimaa futsal 2019-20
              category_id: 'FM5', // Miehet Futsal Vitonen
              group_id: '3', // lohko 3
              matches: '0', // ei ottelulistausta
            },
          },
        ],
      },
    },
  ],
};
