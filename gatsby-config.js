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
              club_id: 571,
              competition_id,
            },
          },
          {
            method: 'getGroup',
            injectData: {
              title: 'Miesten Seiska',
            },
            options: {
              competition_id,
              category_id: 'M7', // Miehet Seiska
              group_id: '4', // lohko 4
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            injectData: {
              title: 'Miesten Kutonen',
            },
            options: {
              competition_id,
              category_id: 'M6', // Miehet Kutonen
              group_id: '4', // lohko 4
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            injectData: {
              title: 'Miehet 35',
            },
            options: {
              competition_id,
              category_id: 'M35', // Miehet 35
              group_id: '4', // lohko 4
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            injectData: {
              title: 'Miehet 40',
            },
            options: {
              competition_id,
              category_id: 'M40', // Miehet 40
              group_id: '6', // lohko 6
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            injectData: {
              title: 'Miehet 50',
            },
            options: {
              competition_id,
              category_id: 'M50', // Miehet 50
              group_id: '5', // lohko 5
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            injectData: {
              title: 'Miehet 55',
            },
            options: {
              competition_id,
              category_id: 'M55', // Miehet 55
              group_id: '2', // lohko 2
              matches: '0', // ei ottelulistausta
            },
          },
        ],
      },
    },
  ],
};
