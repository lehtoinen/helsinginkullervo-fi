import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';

import { FixturesList } from '../FixturesList';

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
  }) => (
    <FixturesList
      updateFilters={updateFixtureFilters}
      fixtures={fixtures}
      filters={filters}
    />
  );

  it('renders', async () => {
    const { asFragment, container } = render(component({}));
    expect(asFragment()).toMatchSnapshot();

    const axeResults = await axe(container);
    expect(axeResults).toHaveNoViolations();
  });

  it('renders with undefined fixtures', async () => {
    const { asFragment, container } = render(
      component({ fixtures: undefined })
    );
    expect(asFragment()).toMatchSnapshot();

    const axeResults = await axe(container);
    expect(axeResults).toHaveNoViolations();
  });
});
