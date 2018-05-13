import * as splAPI from '../api/splAPI';

export const FETCH_FIXTURES_REQUEST = 'FETCH_FIXTURES_REQUEST';
export const FETCH_FIXTURES_RESPONSE = 'FETCH_FIXTURES_RESPONSE';
export const UPDATE_FIXTURE_FILTERS = 'UPDATE_FIXTURE_FILTERS';

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

export const updateFixtureFilters = filters => dispatch => {
  dispatch({ type: UPDATE_FIXTURE_FILTERS, filters });
};
