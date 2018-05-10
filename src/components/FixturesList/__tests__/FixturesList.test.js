import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FixturesList } from '../FixturesList';

configure({ adapter: new Adapter() });

describe('FixturesList', () => {
  let component;

  const fetchFixtures = jest.fn();
  const isLoading = false;
  const fixturesURL = 'foobar';

  beforeEach(() => {
    // pass the mock function as the login prop
    component = shallow(
      <FixturesList
        fetchFixtures={fetchFixtures}
        isLoading={isLoading}
        fixturesURL={fixturesURL}
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
