import React from 'react';
import orderBy from 'lodash/orderBy';
import memoize from 'lodash/memoize';
import uniq from 'lodash/uniq';
import xor from 'lodash/xor';

import { Group, TableFilters } from '../../types';

import Filter from '../Filter';
import CompetitionsTableGroup from './CompetitionsTableGroup';

type Props = {
  groups?: Group[];
  filters: TableFilters;
  updateFilters: (property: string, values: string[]) => void;
};

const parseCompetitions = memoize((groups: Group[]) =>
  uniq(groups.map((group: Group) => group.competition)).sort()
);

const CompetitionsTables = ({ groups = [], filters, updateFilters }: Props) => {
  const competitions = parseCompetitions(groups);

  const filterGroups = (groups: Group[], filters: TableFilters) => {
    const competitionFilters = (
      filters.competition ?? []
    ).filter((competition) => competitions.includes(competition)); // removing non-active competitions

    return competitionFilters.length
      ? groups.filter((group) => competitionFilters.includes(group.competition))
      : groups;
  };

  const onChangeFilter = (property: 'competition', value: string) => {
    const filterValues = xor(filters.competition?.slice(0) ?? [], [value]);
    updateFilters(property, filterValues);
  };

  return (
    <>
      <Filter
        group="tables"
        property="competition"
        options={competitions}
        selected={filters.competition}
        onChange={(value) => onChangeFilter('competition', value)}
      />
      {orderBy(filterGroups(groups, filters), ['competition'], ['asc']).map(
        (group) => (
          <CompetitionsTableGroup
            key={`${group.competition}: ${group.group}`}
            title={`${group.title}`}
            teams={group.teams}
          />
        )
      )}
    </>
  );
};

export default CompetitionsTables;
