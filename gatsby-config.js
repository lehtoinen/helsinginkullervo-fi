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
              competition_id: 'hkifs1819', // Helsinki jalkapallo 2018
              category_id: 'FM5', // Miehet Seiska
              group_id: '1', // lohko 1
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            options: {
              competition_id: 'hkifs1819', // Helsinki jalkapallo 2018
              category_id: 'FMH1', // Miehet Seiska
              group_id: '1', // lohko 1
              matches: '0', // ei ottelulistausta
            },
          },
          {
            method: 'getGroup',
            options: {
              competition_id: 'hkifs1819', // Helsinki jalkapallo 2018
              category_id: 'FMH1', // Miehet Seiska
              group_id: '2', // lohko 1
              matches: '0', // ei ottelulistausta
            },
          },
        ],
      },
    },
  ],
};
