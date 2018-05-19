import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FixturesList } from '../FixturesList';

configure({ adapter: new Adapter() });

describe('FixturesList', () => {
  let component;

  const fetchFixtures = jest.fn();
  const updateFixtureFilters = jest.fn();
  const isLoading = false;
  const fixturesURL = 'foobarh';
  const fixtures = [];
  const filters = {};

  beforeEach(() => {
    // pass the mock function as the login prop
    component = shallow(
      <FixturesList
        fetchFixtures={fetchFixtures}
        updateFixtureFilters={updateFixtureFilters}
        isLoading={isLoading}
        fixturesURL={fixturesURL}
        fixtures={fixtures}
        filters={filters}
      />
    );
  });

  test('calls the fetchFixtures function', () => {
    expect(fetchFixtures.mock.calls.length).toBe(1);
  });

  test('renders', () => {
    expect(component).toMatchSnapshot();
  });
});
