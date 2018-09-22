import React from 'react';
import PropTypes from 'prop-types';

class Competitions extends React.Component {
  render() {
    console.log('Competitions.render', this.props.groups);
    return this.props.groups.map(
      group => `${group.competition}, ${group.group}`
    );
  }
}

Competitions.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      competition: PropTypes.string,
      group: PropTypes.string,
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
      ),
    })
  ),
};

Competitions.defaultProps = {
  groups: [],
};

export default Competitions;
