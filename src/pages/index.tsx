import React from 'react';
import { graphql } from 'gatsby';

import { parseFixture, parseGroup } from '../utils/torneopalParser';

import Layout from '../components/layout/Layout';
import Grid from '../components/layout/Grid';
import BorderedContainer from '../components/layout/BorderedContainer';
import Fixtures from '../containers/Fixtures';
import Competitions from '../containers/Competitions';
import { GroupNode, MatchNode } from '../types';

type Props = {
  data: {
    groups: {
      edges: {
        node: GroupNode;
      }[];
    };
    fixtures: {
      edges: {
        node: MatchNode;
      }[];
    };
  };
};

const IndexPage = ({ data }: Props) => {
  const groups = data?.groups?.edges ?? [];
  const fixtures = data?.fixtures?.edges ?? [];

  return (
    <Layout>
      <Grid>
        <BorderedContainer>
          <h3 id="otteluohjelma">Otteluohjelma</h3>
          <Fixtures
            items={fixtures.map((edge: { node: MatchNode }) =>
              parseFixture(edge.node)
            )}
          />
        </BorderedContainer>
        <BorderedContainer>
          <h3 id="sarjataulukot">Sarjataulukot</h3>
          <Competitions
            items={groups.map((edge: { node: GroupNode }) =>
              parseGroup(edge.node)
            )}
          />
        </BorderedContainer>
      </Grid>
    </Layout>
  );
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
