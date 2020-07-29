import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import xor from 'lodash/xor';

import { RootState, MatchNode, Fixture, FixtureFilters } from '../types';
import { updateFilters } from '../state/actions';
import FilterType from '../enum/FilterType';
import { parseFixture } from '../utils/torneopalParser';
import parseCompetitions from '../utils/parseCompetitions';
import useUserHasInteracted from '../hooks/useUserHasInteracted';

import Filter from '../components/Filter';
import FixturesList from '../components/FixturesList/FixturesList';

const Fixtures = () => {
  const userHasInteracted = useUserHasInteracted();

  const filters = useSelector((state: RootState) => state.fixtureFilters);
  const dispatch = useDispatch();

  const data: FixturesQueryData = useStaticQuery(fixturesQuery);
  const fixtures: Fixture[] = (data?.fixtures?.edges ?? []).map((edge) =>
    parseFixture(edge.node)
  );
  const competitions = parseCompetitions(fixtures);

  const onChangeFilter = (
    property: 'competition' | 'upcoming',
    value: string
  ) => {
    const filterValues = xor(filters[property]?.slice(0) ?? [], [value]);
    dispatch(updateFilters(FilterType.FIXTURES, { [property]: filterValues }));
  };

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

  return (
    <>
      <Filter
        group="fixtures"
        property="competition"
        options={competitions}
        selected={filters.competition}
        onChange={(value) => onChangeFilter('competition', value)}
        legend="Näytä ottelut sarjoista:"
      />
      <Filter
        group="fixtures"
        property="upcoming"
        options={['Näytä vain tulevat ottelut']}
        selected={filters.upcoming}
        onChange={(value) => onChangeFilter('upcoming', value)}
      />
      <FixturesList
        fixtures={filterFixtures(fixtures, filters).slice(
          0,
          !userHasInteracted ? 10 : undefined
        )}
      />
    </>
  );
};

type FixturesQueryData = {
  fixtures: {
    edges: {
      node: MatchNode;
    }[];
  };
};

const fixturesQuery = graphql`
  query FixturesQuery {
    fixtures: allTorneopalMatch {
      edges {
        node {
          id
          date
          time
          category_name
          venue_name
          venue_city_name
          team_A_name
          team_B_name
          fs_A
          fs_B
          status
        }
      }
    }
  }
`;

export default Fixtures;
