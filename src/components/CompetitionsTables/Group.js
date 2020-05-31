import React from 'react';
import PropTypes from 'prop-types';

import Table from '../layout/Table';

import styles from './Group.module.css';

const Group = ({ title, teams }) => (
  <div className={styles.root}>
    <div className={styles.title}>
      <h4>{title}</h4>
    </div>
    <Table
      columnTitles={[
        <div key={`${title}-coltitle-1`} />,
        <div key={`${title}-coltitle-2`} />,
        <div key={`${title}-coltitle-3`}>O</div>,
        <div key={`${title}-coltitle-4`}>V</div>,
        <div key={`${title}-coltitle-5`}>T</div>,
        <div key={`${title}-coltitle-6`}>H</div>,
        <div key={`${title}-coltitle-7`} className={styles.hideSmall}>
          M
        </div>,
        <div key={`${title}-coltitle-8`}>+/-</div>,
        <div key={`${title}-coltitle-9`}>Pst</div>,
      ]}
      rows={teams.map((team) => {
        const goalsTotal = team.goalsFor - team.goalsAgainst;
        return (
          <div
            key={team.id}
            highlight={
              team.name.toLowerCase().includes('kullervo') ? 'true' : ''
            }
          >
            <div>{team.standing}</div>
            <div className={styles.teamCell}>{team.name}</div>
            <div>{team.matchesPlayed}</div>
            <div>{team.matchesWon}</div>
            <div>{team.matchesTied}</div>
            <div>{team.matchesLost}</div>
            <div className={styles.hideSmall}>
              {team.goalsFor}-{team.goalsAgainst}
            </div>
            <div>{`${goalsTotal > 0 ? '+' : ''}${goalsTotal}`}</div>
            <div>{team.points}</div>
          </div>
        );
      })}
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
