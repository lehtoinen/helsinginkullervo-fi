import React from 'react';
import { graphql } from 'gatsby';

import {
  PlayerStats,
  PlayerNode,
  Fixture,
  MatchNode,
  GroupNode,
  Group,
} from 'types';
import {
  parsePlayer,
  parseFixture,
  parseGroup,
} from '../utils/torneopalParser';
import Layout from '../components/layout/Layout';
import Header from '../components/Header/Header';
import Grid from '../components/layout/Grid';
import BorderedContainer from '../components/layout/BorderedContainer';
import PlayersStatsTable from '../components/PlayersStatsTable/PlayersStatsTable';
import FixturesList from '../components/FixturesList/FixturesList';
import CompetitionsTables from '../components/CompetitionsTables/CompetitionsTables';
import { Helmet } from 'react-helmet';

const TeamPage = ({ data }: TeamQueryData) => {
  const {
    team_name: teamName,
    category_name: categoryName,
    officials_jojo: officials,
  } = data.team;

  const group: Group = parseGroup(data?.group);

  const fixtures: Fixture[] = (data?.fixtures?.edges ?? []).map((edge) =>
    parseFixture(edge.node)
  );

  const players: PlayerStats[] = (data?.team?.players ?? [])
    .map((node: PlayerNode) => parsePlayer(node))
    .sort((a, b) => a.shirtNumber - b.shirtNumber);

  const pageTitle = `${teamName}, ${categoryName}`;

  return (
    <Layout
      helmet={
        <Helmet
          title={`Helsingin Kullervo - ${pageTitle}`}
          meta={[
            {
              name: 'description',
              content: `Helsingin Kullervon ${pageTitle} -joukkueen kotisivu`,
            },
            {
              name: 'keywords',
              content: `helsinki, ${teamName}, ${categoryName}`,
            },
          ]}
        />
      }
      header={
        <Header
          anchorLinks={[
            { anchor: '#sarjataulukko', label: 'Sarjataulukko' },
            { anchor: '#ottelut', label: 'Ottelut' },
            { anchor: '#pelaajat', label: 'Pelaajat' },
          ]}
        />
      }
    >
      <BorderedContainer>
        <h2>{pageTitle}</h2>
        {officials.length > 0 && (
          <>
            {officials.length > 1
              ? 'Joukkueenjohtajat: '
              : 'Joukkueenjohtaja: '}
            {officials
              .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
              .join(', ')}
          </>
        )}
      </BorderedContainer>
      <Grid>
        <BorderedContainer>
          <h3 id="sarjataulukko">Sarjataulukko</h3>
          <CompetitionsTables groups={[group]} />
        </BorderedContainer>
        <BorderedContainer>
          <h3 id="ottelut">Ottelut</h3>
          <FixturesList fixtures={fixtures} />
        </BorderedContainer>
        <BorderedContainer>
          <h3 id="pelaajat">Pelaajat</h3>
          <PlayersStatsTable players={players} />
        </BorderedContainer>
      </Grid>
    </Layout>
  );
};

type TeamQueryData = {
  data: {
    team: {
      team_name: string;
      category_name: string;
      officials_jojo: { first_name: string; last_name: string }[];
      players: {
        matches: string;
        goals: string;
        suspensions: string;
        warnings: string;
        first_name: string;
        last_name: string;
        shirt_number: string;
      }[];
    };
    fixtures: {
      edges: {
        node: MatchNode;
      }[];
    };
    group: GroupNode;
  };
};

export const query = graphql`
  query($team_id: String!, $category_id: String!, $group_id: String!) {
    team: torneopalTeam(team_id: { eq: $team_id }) {
      team_name
      category_name
      officials_jojo {
        first_name
        last_name
      }
      players {
        matches
        goals
        suspensions
        warnings
        first_name
        last_name
        shirt_number
      }
    }
    fixtures: allTorneopalMatch(
      filter: { category_id: { eq: $category_id }, group_id: { eq: $group_id } }
    ) {
      edges {
        node {
          id
          date
          time
          category_name
          venue_name
          venue_city_name
          team_A_name
          team_B_name
          fs_A
          fs_B
          status
        }
      }
    }
    group: torneopalGroup(
      category_id: { eq: $category_id }
      group_id: { eq: $group_id }
    ) {
      group_id
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
    }
  }
`;
export default TeamPage;
