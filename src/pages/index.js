import React from 'react';
import PropTypes from 'prop-types';

import { parseFixture, parseGroup } from '../utils/torneopalParser';

import FixturesList from '../components/FixturesList/FixturesList';

const IndexPage = ({ data }) => (
  <div>
    <FixturesList
      fixtures={data.allTorneopalMatch.edges.map(edge =>
        parseFixture(edge.node)
      )}
    />
    <div>
      {data.allTorneopalGroup.edges.map(edge =>
        console.log(parseGroup(edge.node))
      )}
    </div>
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allTorneopalMatch: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            category_name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            fs_A: PropTypes.string.isRequired,
            fs_B: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            team_A_name: PropTypes.string.isRequired,
            team_B_name: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
            venue_name: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    allTorneopalGroup: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            category_name: PropTypes.string.isRequired,
            group_id: PropTypes.string.isRequired,
            teams: PropTypes.arrayOf(
              PropTypes.shape({
                team_name: PropTypes.string.isRequired,
                team_id: PropTypes.string.isRequired,
                current_standing: PropTypes.number.isRequired,
                points: PropTypes.number.isRequired,
                matches_played: PropTypes.number.isRequired,
                matches_tied: PropTypes.number.isRequired,
                matches_lost: PropTypes.number.isRequired,
                matches_won: PropTypes.number.isRequired,
                goals_for: PropTypes.number.isRequired,
                goals_against: PropTypes.number.isRequired,
              })
            ).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    allTorneopalMatch {
      edges {
        node {
          id
          date
          time
          category_name
          venue_name
          team_A_name
          team_B_name
          fs_A
          fs_B
          status
        }
      }
    }

    allTorneopalGroup {
      edges {
        node {
          id
          competition_id
          category_name
          group_name
          teams {
            team_name
            team_id
            current_standing
            points
            matches_played
            matches_tied
            matches_lost
            matches_won
            goals_for
            goals_against
          }
          # Documenting the player stats fields here for future use.
          # player_statistics {
          #   player_name
          #   team_id
          #   team_name
          #   standing
          #   goals
          # }
        }
      }
    }
  }
`;
