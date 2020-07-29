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
  teams: Team[];
  externalURL: string;
};

export type Fixture = {
  time: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  isCompleted: boolean;
  venue?: string;
  city?: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
};

export type PlayerStats = {
  shirtNumber: number;
  name: string;
  matches: number;
  goals: number;
  warnings: number;
  suspensions: number;
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
  fs_B: string;
  team_B_name: string;
  category_name: string;
  date: string;
  fs_A: string;
  team_A_name: string;
  status: string;
  time: string;
  venue_name: string;
  venue_city_name: string;
};

export type StandingsNode = {
  team_name: string;
  team_id: string;
  goals_for: string;
  goals_against: string;
  matches_lost: string;
  matches_played: string;
  matches_tied: string;
  matches_won: string;
  points: string;
  current_standing: string;
};

export type GroupNode = {
  group_id: string;
  category_name: string;
  group_name: string;
  live_standings: StandingsNode[];
};

export type PlayerNode = {
  shirt_number: string;
  first_name: string;
  last_name: string;
  matches: string;
  goals: string;
  warnings: string;
  suspensions: string;
};
