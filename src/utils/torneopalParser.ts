import {
  GroupNode,
  MatchNode,
  PlayerNode,
  Group,
  Fixture,
  PlayerStats,
} from '../types';
import slug from 'slug';

// Helper function to parse a Torneopal match node to a fixture object
export const parseFixture = (match: MatchNode): Fixture => ({
  awayScore: parseInt(match.fs_B, 10),
  awayTeam: match.team_B_name,
  competition: match.category_name,
  date: match.date,
  homeScore: parseInt(match.fs_A, 10),
  homeTeam: match.team_A_name,
  isCompleted: match.status === 'Played',
  time: match.time,
  venue: match.venue_name,
  city: match.venue_city_name,
});

// Helper function to parse a Torneopal group node to a group object
export const parseGroup = (group: GroupNode): Group => ({
  competition: group.category_name,
  group: group.group_name,
  externalURL: `https://www.palloliitto.fi/spletela/${slug(
    group.category_name
  )}/tilastot?group=${group.group_id}`,
  teams: group.live_standings.map((team) => ({
    name: team.team_name,
    id: team.team_id,
    goalsFor: parseInt(team.goals_for, 10),
    goalsAgainst: parseInt(team.goals_against, 10),
    matchesLost: parseInt(team.matches_lost, 10),
    matchesPlayed: parseInt(team.matches_played, 10),
    matchesTied: parseInt(team.matches_tied, 10),
    matchesWon: parseInt(team.matches_won, 10),
    points: parseInt(team.points, 10),
    standing: parseInt(team.current_standing, 10),
  })),
});

export const parsePlayer = (player: PlayerNode): PlayerStats => ({
  shirtNumber: parseInt(player.shirt_number, 10),
  name: `${player.first_name} ${player.last_name}`,
  matches: parseInt(player.matches, 10),
  goals: parseInt(player.goals, 10),
  warnings: parseInt(player.warnings, 10),
  suspensions: parseInt(player.suspensions, 10),
});

export default {
  parseFixture,
  parseGroup,
};
