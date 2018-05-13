import { combineReducers } from 'redux';

import {
  FETCH_FIXTURES_REQUEST,
  FETCH_FIXTURES_RESPONSE,
  UPDATE_FIXTURE_FILTERS,
} from './actions';

const fixturesLoading = (state = false, action) => {
  if (action.type === FETCH_FIXTURES_REQUEST) {
    return true;
  }

  if (action.type === FETCH_FIXTURES_RESPONSE) {
    return false;
  }

  return state;
};

const fixtures = (state = {}, action) => {
  if (action.type === FETCH_FIXTURES_RESPONSE) {
    return { ...state, ...{ [action.url]: action.fixtures } };
  }

  return state;
};

const fixtureFilters = (state = {}, action) => {
  if (action.type === UPDATE_FIXTURE_FILTERS) {
    return { ...state, ...action.filters };
  }

  return state;
};

export default combineReducers({
  fixturesLoading,
  fixtures,
  fixtureFilters,
});
