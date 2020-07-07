import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Group } from '../types';
import { updateFilters } from '../state/actions';
import FilterType from '../enum/FilterType';
import CompetitionsTables from '../components/CompetitionsTables/CompetitionsTables';

type Props = {
  items: Group[];
};

const Competitions = ({ items = [] }: Props) => {
  const filters = useSelector((state: RootState) => state.tableFilters);
  const dispatch = useDispatch();

  const onUpdateFilters = (property: string, values: string[]) =>
    dispatch(updateFilters(FilterType.TABLES, { [property]: values }));

  return (
    <CompetitionsTables
      groups={items}
      filters={filters}
      updateFilters={onUpdateFilters}
    />
  );
};

export default Competitions;
