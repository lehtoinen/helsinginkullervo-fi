import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Grid from '../components/layout/Grid';
import BorderedContainer from '../components/layout/BorderedContainer';
import PlayersStatsTable from '../components/PlayersStatsTable/PlayersStatsTable';
import { PlayerStats, PlayerNode } from 'types';
import { parsePlayer } from '../utils/torneopalParser';

const TeamPage = ({ data }: TeamQueryData) => {
  const {
    team_name: teamName,
    category_name: categoryName,
    officials_jojo: officials,
  } = data.team;

  const players: PlayerStats[] = (data?.team?.players ?? [])
    .map((node: PlayerNode) => parsePlayer(node))
    .sort((a, b) => a.shirtNumber - b.shirtNumber);

  return (
    <Layout>
      <BorderedContainer>
        <h2>
          {teamName}, {categoryName}
        </h2>
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
          <h3>Sarjataulukko</h3>
          <h3>Otteluohjelma</h3>
        </BorderedContainer>
        <BorderedContainer>
          <h3>Pelaajat</h3>
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
  };
};

export const query = graphql`
  query($team_id: String!) {
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
  }
`;
export default TeamPage;
