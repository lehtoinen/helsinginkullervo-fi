import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';

import Fixture from '../Fixture';

describe('Fixture', () => {
  const component = ({
    fixture = {
      awayScore: '0',
      awayTeam: 'Kullervo/Überkleber',
      competition: 'Regions Cup',
      homeScore: '8',
      homeTeam: 'RiPS',
      isCompleted: true,
      time: '15:00:00',
      venue: 'Riihimäki Keskuskenttä TN',
    },
  }) => <Fixture {...fixture} />;

  it('renders', async () => {
    const { asFragment, container } = render(component({}));
    expect(asFragment()).toMatchSnapshot();

    const axeResults = await axe(container);
    expect(axeResults).toHaveNoViolations();
  });

  it('renders with only required props defined', async () => {
    const { asFragment, container } = render(
      component({
        fixture: {
          awayTeam: 'Kullervo/Überkleber',
          competition: 'Regions Cup',
          homeTeam: 'RiPS',
          isCompleted: true,
          time: '15:00:00',
        },
      })
    );
    expect(asFragment()).toMatchSnapshot();

    const axeResults = await axe(container);
    expect(axeResults).toHaveNoViolations();
  });
});
