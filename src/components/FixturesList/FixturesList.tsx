import React, { Fragment } from 'react';
import uniq from 'lodash/uniq';
import memoize from 'lodash/memoize';
import xor from 'lodash/xor';

import { Fixture, FixtureFilters } from '../../types';

import Filter from '../Filter';
import FixtureListEntry from './FixtureListEntry';
import DateBadge from './DateBadge';

type Props = {
  fixtures: Fixture[];
  filters: FixtureFilters;
  updateFilters: (property: string, values: string[]) => void;
};

const parseCompetitions = memoize((fixtures: Fixture[]) =>
  uniq(fixtures.map((fixture) => fixture.competition)).sort()
);

const FixturesList = ({ fixtures = [], filters, updateFilters }: Props) => {
  const competitions = parseCompetitions(fixtures);

  const filterFixtures = (
    fixtures: Fixture[],
    filters: FixtureFilters
  ): Fixture[] => {
    // filter fixtures by completion status
    const filtered: Fixture[] =
      filters.upcoming && filters.upcoming.length
        ? fixtures.filter((fixture) => !fixture.isCompleted)
        : fixtures;

    // filter fixtures by competition
    const competitionFilters = (
      filters.competition ?? []
    ).filter((competition) => competitions.includes(competition)); // removing non-active competitions

    return competitionFilters.length
      ? filtered.filter((fixture) =>
          competitionFilters.includes(fixture.competition)
        )
      : filtered;
  };

  const onChangeFilter = (
    property: 'competition' | 'upcoming',
    value: string
  ) => {
    const filterValues = xor(filters[property]?.slice(0) ?? [], [value]);
    updateFilters(property, filterValues);
  };

  let currentDate: Date;

  return (
    <div>
      <Fragment>
        <Filter
          group="fixtures"
          property="competition"
          options={competitions}
          selected={filters.competition}
          onChange={(value) => onChangeFilter('competition', value)}
        />
        <Filter
          group="fixtures"
          property="upcoming"
          options={['Näytä vain tulevat ottelut']}
          selected={filters.upcoming}
          onChange={(value) => onChangeFilter('upcoming', value)}
        />
      </Fragment>
      {filterFixtures(fixtures, filters).map((fixture) => {
        const addDateBadge = currentDate !== fixture.date;
        currentDate = fixture.date;

        return (
          <Fragment
            key={`${fixture.homeTeam}${fixture.awayTeam}${fixture.date}`}
          >
            {addDateBadge && (
              <DateBadge
                date={new Date(fixture.date)}
                isPast={fixture.isCompleted}
              />
            )}
            <FixtureListEntry {...fixture} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default FixturesList;
