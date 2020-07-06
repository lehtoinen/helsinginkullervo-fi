import { UpdateFiltersAction } from './actionTypes';

export const UPDATE_FILTERS = 'UPDATE_FILTERS';

export const updateFilters = (filterType: string, values: string[]) => (
  dispatch: (action: UpdateFiltersAction) => void
) => {
  dispatch({ type: UPDATE_FILTERS, payload: { filterType, values } });
};
