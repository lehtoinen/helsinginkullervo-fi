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
};
