import React from 'react';
import PropTypes from 'prop-types';

import styles from './Fixture.module.scss';

const Fixture = props => {
  const time = props.time.substr(0, props.time.length - 3);
  let winner;
  if (props.isCompleted) winner = props.homeScore - props.awayScore;

  return (
    <div
      className={`${styles.fixture} ${
        props.isCompleted ? styles.completed : null
      }`}
    >
      <div className={styles.subject}>
        <span className={styles.competition}> {props.competition}: </span>
        <span className={winner > 0 ? styles.winner : null}>
          {props.homeTeam} {props.homeScore}
        </span>{' '}
        -{' '}
        <span className={winner < 0 ? styles.winner : null}>
          {props.awayScore} {props.awayTeam}
        </span>
      </div>
      <div className={styles.info}>
        klo {time} <span className={styles.location}>{props.venue}</span>
      </div>
    </div>
  );
};

Fixture.propTypes = {
  time: PropTypes.string.isRequired,
  competition: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  venue: PropTypes.string,
  homeScore: PropTypes.string,
  awayScore: PropTypes.string,
};

Fixture.defaultProps = {
  venue: null,
  homeScore: null,
  awayScore: null,
};

export default Fixture;
