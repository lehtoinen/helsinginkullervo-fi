import { combineReducers } from 'redux';

import { FETCH_FIXTURES_REQUEST, FETCH_FIXTURES_RESPONSE } from './actions';

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

// const signUpEvents = (state = [], action) => {
//   if (action.type === FETCH_FIXTURES_RESPONSE) {
//     return [...state, ...(action.events.nimenhuutoEvents || [])];
//   }

//   return state;
// };

export default combineReducers({
  fixturesLoading,
  fixtures,
});
