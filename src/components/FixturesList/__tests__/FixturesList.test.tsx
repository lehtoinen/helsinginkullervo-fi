import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';

import FixturesList from '../FixturesList';

describe('FixturesList', () => {
  const component = ({
    fixtures = [
      {
        awayScore: 0,
        awayTeam: 'Kullervo/Überkleber',
        competition: 'Regions Cup',
        date: '2020-06-06',
        homeScore: 8,
        homeTeam: 'RiPS',
        isCompleted: true,
        time: '15:00:00',
        venue: 'Riihimäki Keskuskenttä TN',
      },
    ],
  }) => <FixturesList fixtures={fixtures} />;

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
