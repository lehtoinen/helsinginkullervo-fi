import { GroupNode, MatchNode } from '../types';
import slugify from './slugify';

// Helper function to parse a Torneopal match node to a fixture object
export const parseFixture = (match: MatchNode) => ({
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
  city: match.venue_city_name,
});

// Helper function to parse a Torneopal group node to a group object
export const parseGroup = (group: GroupNode) => ({
  competition: group.category_name,
  group: group.group_name,
  externalURL: `https://www.palloliitto.fi/spletela/${slugify(
    group.category_name
  )}/tilastot?group=${group.group_id}`,
  teams: group.live_standings.map((team) => ({
    name: team.team_name,
    id: team.team_id,
    goalsFor: team.goals_for,
    goalsAgainst: team.goals_against,
    matchesLost: team.matches_lost,
    matchesPlayed: team.matches_played,
    matchesTied: team.matches_tied,
    matchesWon: team.matches_won,
    points: team.points_home + team.points_away,
    standing: team.current_standing,
  })),
});

export default {
  parseFixture,
  parseGroup,
};
