import React from 'react';
import PropTypes from 'prop-types';

import FixturesList from '../components/FixturesList/FixturesList';

// Helper function to parse a Torneopal match node to a fixture for the FixtureList
const parseFixture = match => ({
  awayScore: match.fs_B,
  awayTeam: match.team_B_name,
  competition: match.category_name,
  date: match.date,
  homeScore: match.fs_A,
  homeTeam: match.team_A_name,
  isCompleted: match.status === 'Played',
  time: match.time,
  timecode: `${match.date}-${match.time}`,
  venue: match.venue_name,
});

const IndexPage = ({ data }) => (
  <div>
    <FixturesList
      fixtures={data.allTorneopalMatch.edges.map(edge =>
        parseFixture(edge.node)
      )}
    />
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
  }).isRequired,
};

export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query AboutQuery {
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
  }
`;
