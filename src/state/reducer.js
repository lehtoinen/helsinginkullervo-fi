import { combineReducers } from 'redux';

import { UPDATE_FIXTURE_FILTERS } from './actions';

const fixtureFilters = (state = {}, action) => {
  if (action.type === UPDATE_FIXTURE_FILTERS) {
    return { ...state, ...action.filters };
  }

  return state;
};

export default combineReducers({
  fixtureFilters,
});
