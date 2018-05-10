import * as splAPI from '../api/splAPI';
// import * as nimenhuutoAPI from '../api/nimenhuutoAPI';

export const FETCH_FIXTURES_REQUEST = 'FETCH_FIXTURES_REQUEST';
export const FETCH_FIXTURES_RESPONSE = 'FETCH_FIXTURES_RESPONSE';
// export const FETCH_EVENTS_START = 'FETCH_EVENTS_START';
// export const FETCH_EVENTS_COMPLETE = 'FETCH_EVENTS_COMPLETE';
// export const FETCH_EVENTS_RESPONSE = 'FETCH_EVENTS_RESPONSE';

const fetchFixturesRequest = {
  type: FETCH_FIXTURES_REQUEST,
};

const fetchFixturesResponse = (url, fixtures) => ({
  type: FETCH_FIXTURES_RESPONSE,
  url,
  fixtures,
});

export const fetchFixtures = url => dispatch => {
  dispatch(fetchFixturesRequest);
  splAPI
    .fetchFixtures(url)
    .then(fixtures => dispatch(fetchFixturesResponse(url, fixtures)));
};

// export const fetchEvents = ({ splFixtures, nimenhuutoEvents }) => dispatch => {
//   dispatch(fetchStartLoading);

//   // Fetch fixtures for all given urls
//   const splPromises = splFixtures.map(url =>
//     splAPI.fetchFixtures(url).then(fixtures =>
//       dispatch(
//         fetchEventsResponse({
//           splFixtures: fixtures,
//         })
//       )
//     )
//   );

//   const nimenhuutoPromises = nimenhuutoEvents.map(url =>
//     nimenhuutoAPI.fetchEvents(url).then(events =>
//       dispatch(
//         fetchEventsResponse({
//           nimenhuutoEvents: events,
//         })
//       )
//     )
//   );

//   // When all fetching is done, dispatch loading complete
//   Promise.all([...splPromises, ...nimenhuutoPromises]).then(() =>
//     dispatch(fetchCompleteLoading)
//   );
// };
