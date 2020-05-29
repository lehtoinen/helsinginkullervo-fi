import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';

import { parseFixture, parseGroup } from '../utils/torneopalParser';

import Layout from '../components/layout/Layout';
import Grid from '../components/layout/Grid';
import BorderedContainer from '../components/layout/BorderedContainer';
import FixturesList from '../components/FixturesList/FixturesList';
import CompetitionsTables from '../components/CompetitionsTables/CompetitionsTables';

const IndexPage = ({ data }) => {
  const groups = get(data, 'groups.edges', []);
  const fixtures = get(data, 'fixtures.edges', []);

  return (
    <Layout>
      <Grid>
        <BorderedContainer>
          <h2 id="otteluohjelma">Otteluohjelma</h2>
          <FixturesList
            fixtures={fixtures.map((edge) => parseFixture(edge.node))}
          />
        </BorderedContainer>
        <BorderedContainer>
          <h2 id="sarjataulukot">Sarjataulukot</h2>
          <CompetitionsTables
            groups={groups.map((edge) => parseGroup(edge.node))}
          />
        </BorderedContainer>
      </Grid>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    fixtures: PropTypes.shape({
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
    groups: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            category_name: PropTypes.string.isRequired,
            group_name: PropTypes.string.isRequired,
            title: PropTypes.string,
            live_standings: PropTypes.arrayOf(
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
  {
    fixtures: allTorneopalMatch {
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
    groups: allTorneopalGroup {
      edges {
        node {
          id
          title
          competition_id
          category_name
          group_name
          live_standings {
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
