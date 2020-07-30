const path = require('path');
const slug = require('slug');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allTorneopalTeam {
        edges {
          node {
            team_id
            category_name
            category_id
            group_id
          }
        }
      }
    }
  `);

  if (result.data.allTorneopalTeam) {
    for (const { node } of result.data.allTorneopalTeam.edges) {
      const { team_id, category_name, category_id, group_id } = node;
      const pageSlug = slug(category_name);

      createPage({
        path: pageSlug,
        component: path.resolve(`./src/templates/team.tsx`),
        context: {
          team_id,
          category_id,
          group_id,
        },
      });
    }
  }
};
