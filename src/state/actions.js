export const UPDATE_FIXTURE_FILTERS = 'UPDATE_FIXTURE_FILTERS';

export const updateFixtureFilters = filters => dispatch => {
  dispatch({ type: UPDATE_FIXTURE_FILTERS, filters });
};
