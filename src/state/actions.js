export const UPDATE_FILTERS = 'UPDATE_FILTERS';

export const updateFilters = (filterType, values) => dispatch => {
  dispatch({ type: UPDATE_FILTERS, filterType, values });
};
