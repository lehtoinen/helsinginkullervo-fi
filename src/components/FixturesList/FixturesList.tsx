import React, { Fragment } from 'react';

import { Fixture } from '../../types';

import FixtureListEntry from './FixtureListEntry';
import DateBadge from './DateBadge';

type Props = {
  fixtures: Fixture[];
};

const FixturesList = ({ fixtures = [] }: Props) => {
  let currentDate: string;

  return (
    <>
      {fixtures.map((fixture) => {
        const addDateBadge = currentDate !== fixture.date;
        currentDate = fixture.date;

        return (
          <Fragment
            key={`${fixture.homeTeam}${fixture.awayTeam}${fixture.date}`}
          >
            {addDateBadge && (
              <DateBadge
                date={new Date(fixture.date)}
                isPast={fixture.isCompleted}
              />
            )}
            <FixtureListEntry {...fixture} />
          </Fragment>
        );
      })}
    </>
  );
};

export default FixturesList;
