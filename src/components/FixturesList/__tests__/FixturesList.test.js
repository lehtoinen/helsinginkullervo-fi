import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FixturesList } from '../FixturesList';

configure({ adapter: new Adapter() });

describe('FixturesList', () => {
  const updateFixtureFilters = jest.fn();

  // pass the mock function as the login prop
  const component = ({
    fixtures = [
      {
        awayScore: '0',
        awayTeam: 'Kullervo/Überkleber',
        competition: 'Regions Cup',
        date: '2018-04-15',
        homeScore: '8',
        homeTeam: 'RiPS',
        isCompleted: true,
        time: '15:00:00',
        timecode: '2018-04-15-15:00:00',
        venue: 'Riihimäki Keskuskenttä TN',
      },
    ],
    filters = {},
  }) =>
    shallow(
      <FixturesList
        updateFilters={updateFixtureFilters}
        fixtures={fixtures}
        filters={filters}
      />
    );

  test('renders', () => {
    expect(component({})).toMatchSnapshot();
  });

  test('renders with undefined fixtures', () => {
    expect(component({ fixtures: null })).toMatchSnapshot();
  });
});
