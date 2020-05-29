import { combineReducers } from 'redux';

import { UPDATE_FILTERS } from './actions';
import FilterType from '../enum/FilterType';

const fixtureFilters = (state = {}, action) => {
  if (
    action.type === UPDATE_FILTERS &&
    action.filterType === FilterType.FIXTURES
  ) {
    return { ...action.values };
  }

  return state;
};

const tableFilters = (state = {}, action) => {
  if (
    action.type === UPDATE_FILTERS &&
    action.filterType === FilterType.TABLES
  ) {
    return { ...action.values };
  }

  return state;
};

export default combineReducers({
  fixtureFilters,
  tableFilters,
});
