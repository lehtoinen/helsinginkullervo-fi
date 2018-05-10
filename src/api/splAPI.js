function parseMatch(match) {
  return {
    source: 'spl',
    timecode: `${match.date}-${match.time}`,
    competition: match.category_name,
    date: new Date(match.date),
    time: match.time,
    venue: match.venue_name,
    homeTeam: match.team_A_name,
    homeScore: match.fs_A,
    awayTeam: match.team_B_name,
    awayScore: match.fs_B,
    isCompleted: match.status === 'Played',
  };
}

// /api/fixtures/?season_id=2018&club_id=571
export const fetchFixtures = url =>
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.text();
    })
    .then(text => JSON.parse(text))
    .then(obj => obj.matches.map(match => parseMatch(match)))
    .then(fixtures => fixtures);

// /table/?competition_id=hkijp18&category_id=M7&group_id=1&matches=1
// export function fetchTable(url) {
//   url;
// }

export default fetchFixtures;
