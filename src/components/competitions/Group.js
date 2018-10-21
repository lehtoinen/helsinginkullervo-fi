import React from 'react';
import PropTypes from 'prop-types';

import styles from './Group.module.scss';

const Group = props => (
  <div className={styles.root}>
    <h4>{props.title}</h4>
    <thead>
      <tr>
        <th />
        <th />
        <th>O</th>
        <th>V</th>
        <th>T</th>
        <th>H</th>
        <th>TM</th>
        <th>PM</th>
        <th>+/-</th>
        <th>Pst</th>
      </tr>
    </thead>
    <tbody>
      {props.teams.map(team => (
        <tr
          key={team.id}
          className={
            team.name.toLowerCase().includes('kullervo')
              ? styles.highlight
              : null
          }
        >
          <td>{team.standing}</td>
          <td>{team.name}</td>
          <td>{team.matchesPlayed}</td>
          <td>{team.matchesWon}</td>
          <td>{team.matchesTied}</td>
          <td>{team.matchesLost}</td>
          <td>{team.goalsFor}</td>
          <td>{team.goalsAgainst}</td>
          <td>{team.goalsFor - team.goalsAgainst}</td>
          <td>{team.points}</td>
        </tr>
      ))}
    </tbody>
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
