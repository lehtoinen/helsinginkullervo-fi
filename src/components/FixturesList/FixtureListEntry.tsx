import React from 'react';

import * as styles from './FixtureListEntry.module.css';
import { Fixture } from '../../types';

const FixtureListEntry = ({
  time,
  isCompleted,
  competition,
  homeTeam,
  awayTeam,
  venue,
  city,
  homeScore = 0,
  awayScore = 0,
}: Fixture) => {
  const timeStr = time.substr(0, time.length - 3);
  const winner = isCompleted ? homeScore - awayScore : 0;

  return (
    <div
      className={`${styles.fixture} ${isCompleted ? styles.completed : null}`}
    >
      <div className={styles.subject}>
        <span> {competition}: </span>
        <span className={winner > 0 ? styles.winner : null}>
          {homeTeam} {homeScore}
        </span>{' '}
        -{' '}
        <span className={winner < 0 ? styles.winner : null}>
          {awayScore} {awayTeam}
        </span>
      </div>
      <div className={styles.info}>
        klo {timeStr}{' '}
        <span className={styles.location}>
          {venue}
          {city ? `, ${city}` : ''}
        </span>
      </div>
    </div>
  );
};

export default FixtureListEntry;
