import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FixturesList } from '../FixturesList';

configure({ adapter: new Adapter() });

describe('FixturesList', () => {
  const fetchFixtures = jest.fn();
  const updateFixtureFilters = jest.fn();

  // pass the mock function as the login prop
  const component = ({
    isLoading = false,
    fixturesURL = 'foobar',
    fixtures = [],
    filters = {},
  }) =>
    shallow(
      <FixturesList
        fetchFixtures={fetchFixtures}
        updateFixtureFilters={updateFixtureFilters}
        isLoading={isLoading}
        fixturesURL={fixturesURL}
        fixtures={fixtures}
        filters={filters}
      />
    );

  test('calls the fetchFixtures function', () => {
    component({});
    expect(fetchFixtures.mock.calls.length).toBe(1);
  });

  test('renders', () => {
    expect(component({})).toMatchSnapshot();
  });

  test('renders with undefined fixtures', () => {
    expect(component({ fixtures: null })).toMatchSnapshot();
  });
});
