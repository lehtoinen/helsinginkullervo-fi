import React from 'react';
import PropTypes from 'prop-types';

import Table from '../layout/Table';

import styles from './Group.module.scss';

const Group = ({ title, teams }) => (
  <div className={styles.root}>
    <div className={styles.title}>{title}</div>
    <Table
      columnTitles={[
        <div />,
        <div />,
        <div>O</div>,
        <div>V</div>,
        <div>T</div>,
        <div>H</div>,
        <div className={styles.hideSmall}>TM</div>,
        <div className={styles.hideSmall}>PM</div>,
        <div>+/-</div>,
        <div>Pst</div>,
      ]}
      rows={teams.map(team => (
        <div
          key={team.id}
          highlight={team.name.toLowerCase().includes('kullervo')}
        >
          <div>{team.standing}</div>
          <div className={styles.teamCell}>{team.name}</div>
          <div>{team.matchesPlayed}</div>
          <div>{team.matchesWon}</div>
          <div>{team.matchesTied}</div>
          <div>{team.matchesLost}</div>
          <div className={styles.hideSmall}>{team.goalsFor}</div>
          <div className={styles.hideSmall}>{team.goalsAgainst}</div>
          <div>{team.goalsFor - team.goalsAgainst}</div>
          <div>{team.points}</div>
        </div>
      ))}
    />
  </div>
);

Group.propTypes = {
  title: PropTypes.string.isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      goalsAgainst: PropTypes.number,
      goalsFor: PropTypes.number,
      id: PropTypes.string,
      matchesLost: PropTypes.number,
      matchesPlayed: PropTypes.number,
      matchesTied: PropTypes.number,
      matchesWon: PropTypes.number,
      name: PropTypes.string,
      points: PropTypes.number,
      standing: PropTypes.number,
    })
  ).isRequired,
};

Group.defaultProps = {};

export default Group;
