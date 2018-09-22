import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Fixture from '../Fixture';

configure({ adapter: new Adapter() });

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
  }) => shallow(<Fixture {...fixture} />);

  test('renders', () => {
    expect(component({})).toMatchSnapshot();
  });

  test('renders with only required props defined', () => {
    expect(
      component({
        fixture: {
          awayTeam: 'Kullervo/Überkleber',
          competition: 'Regions Cup',
          homeTeam: 'RiPS',
          isCompleted: true,
          time: '15:00:00',
        },
      })
    ).toMatchSnapshot();
  });
});
