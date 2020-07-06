import { combineReducers } from 'redux';

import { UPDATE_FILTERS } from './actions';
import FilterType from '../enum/FilterType';
import { Action } from './actionTypes';

const fixtureFilters = (state = {}, action: Action) => {
  if (
    action.type === UPDATE_FILTERS &&
    action.payload?.filterType === FilterType.FIXTURES
  ) {
    return { ...state, ...action.payload?.values };
  }

  return state;
};

const tableFilters = (state = {}, action: Action) => {
  if (
    action.type === UPDATE_FILTERS &&
    action.payload?.filterType === FilterType.TABLES
  ) {
    return { ...state, ...action.payload?.values };
  }

  return state;
};

export default combineReducers({
  fixtureFilters,
  tableFilters,
});
