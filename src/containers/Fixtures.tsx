import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fixture, RootState } from '../types';
import { updateFilters } from '../state/actions';
import FilterType from '../enum/FilterType';
import FixturesList from '../components/FixturesList/FixturesList';

type Props = {
  items: Fixture[];
};

const Fixtures = ({ items = [] }: Props) => {
  const filters = useSelector((state: RootState) => state.fixtureFilters);
  const dispatch = useDispatch();

  const onUpdateFilters = (property: string, values: string[]) =>
    dispatch(updateFilters(FilterType.FIXTURES, { [property]: values }));

  return (
    <FixturesList
      fixtures={items}
      filters={filters}
      updateFilters={onUpdateFilters}
    />
  );
};

export default Fixtures;
