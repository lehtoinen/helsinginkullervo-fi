require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Helsingin Kullervo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Helsingin Kullervo`,
        short_name: `Kullervo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/img/kullervo.svg`,
        cache_busting_mode: `none`,
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
              competition_id: 'uusjp19',
            },
          },
          {
            method: 'getGroup',
            options: {
              competition_id: 'uusjp19', // Uusimaa jalkapallo 2019
              category_id: 'M7', // Miehet Seiska
              group_id: '1', // lohko 1
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            options: {
              competition_id: 'uusjp19', // Uusimaa jalkapallo 2019
              category_id: 'M6', // Miehet Kutonen
              group_id: '6', // lohko 6
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            options: {
              competition_id: 'uusjp19', // Uusimaa jalkapallo 2019
              category_id: 'M35', // KKI-35
              group_id: '3', // lohko 3
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            options: {
              competition_id: 'uusjp19', // Uusimaa jalkapallo 2019
              category_id: 'M40', // KKI-40
              group_id: '3', // lohko 3
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            options: {
              competition_id: 'uusjp19', // Uusimaa jalkapallo 2019
              category_id: 'M50_7', // KKI-50
              group_id: '3', // lohko 3
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            options: {
              competition_id: 'uusjp19', // Uusimaa jalkapallo 2019
              category_id: 'M55_7', // KKI-55
              group_id: '3', // lohko 3
              matches: '0', // ei ottelulistausta
            },
          },
        ],
      },
    },
  ],
};
