import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import orderBy from 'lodash/orderBy';
import memoize from 'lodash/memoize';
import uniq from 'lodash/uniq';

import { updateFilters } from '../../state/actions';
import FilterType from '../../enum/FilterType';

import Filter from '../Filter';
import CompetitionsTableGroup from './CompetitionsTableGroup';

type Props = {
  groups?: Group[];
};

const parseCompetitions = memoize((groups) =>
  uniq(groups.map((group) => `${group.competition}`)).sort()
);

const CompetitionsTables = ({ groups = [] }) => {
  const filters = useSelector((state) => state.tableFilters);
  const dispatch = useDispatch();
  const competitions = parseCompetitions(groups);

  const filterGroups = (groups, filters) => {
    const competitionFilters = (
      filters.competition ?? []
    ).filter((competition) => competitions.includes(competition)); // removing non-active competitions

    return competitionFilters.length
      ? groups.filter((group) => competitionFilters.includes(group.competition))
      : groups;
  };

  const onChangeFilter = (value: string) => {
    const filterValues = filters.competition?.slice(0) ?? [];
    const ind = filterValues.indexOf(value);
    if (ind === -1) {
      filterValues.push(value);
    } else {
      filterValues.splice(ind, 1);
    }

    dispatch(updateFilters(FilterType.TABLES, { competition: filterValues }));
  };

  return (
    <div>
      <React.Fragment>
        <Filter
          group="tables"
          options={competitions}
          selected={filters.competition}
          onChange={(option) => onChangeFilter(option)}
        />
      </React.Fragment>
      {orderBy(filterGroups(groups, filters), ['competition'], ['asc']).map(
        (group) => (
          <CompetitionsTableGroup
            key={`${group.competition}: ${group.group}`}
            title={`${group.title}`}
            teams={group.teams}
          />
        )
      )}
    </div>
  );
};

export default CompetitionsTables;
