export type Team = {
  goalsAgainst: number;
  goalsFor: number;
  id: string;
  matchesLost: number;
  matchesPlayed: number;
  matchesTied: number;
  matchesWon: number;
  name: string;
  points: number;
  standing: number;
};

export type Group = {
  competition: string;
  group: string;
  title: string;
  teams: Team[];
};

export type Fixture = {
  time: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  isCompleted: boolean;
  venue?: string;
  homeScore?: number;
  awayScore?: number;
  date: Date;
};

export type FixtureFilters = {
  competition: string[];
  upcoming: string[];
};

export type TableFilters = {
  competition: string[];
};

export type RootState = {
  fixtureFilters: FixtureFilters;
  tableFilters: TableFilters;
};

export type MatchNode = {
  fs_B: number;
  team_B_name: string;
  category_name: string;
  date: Date;
  fs_A: number;
  team_A_name: string;
  status: string;
  time: string;
  venue_name: string;
};

export type TeamNode = {
  team_name: string;
  team_id: string;
  goals_for: number;
  goals_against: number;
  matches_lost: number;
  matches_played: number;
  matches_tied: number;
  matches_won: number;
  points: number;
  current_standing: number;
};

export type GroupNode = {
  title: string;
  category_name: string;
  group_name: string;
  live_standings: TeamNode[];
};
