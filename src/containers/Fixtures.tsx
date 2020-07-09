import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { RootState, MatchNode, Fixture } from '../types';
import { updateFilters } from '../state/actions';
import { parseFixture } from '../utils/torneopalParser';
import FilterType from '../enum/FilterType';

import FixturesList from '../components/FixturesList/FixturesList';

const Fixtures = () => {
  const filters = useSelector((state: RootState) => state.fixtureFilters);
  const dispatch = useDispatch();

  const data: FixturesQueryData = useStaticQuery(fixturesQuery);
  const fixtures: Fixture[] = (data?.fixtures?.edges ?? []).map((edge) =>
    parseFixture(edge.node)
  );

  const onUpdateFilters = (property: string, values: string[]) =>
    dispatch(updateFilters(FilterType.FIXTURES, { [property]: values }));

  return (
    <FixturesList
      fixtures={fixtures}
      filters={filters}
      updateFilters={onUpdateFilters}
    />
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
