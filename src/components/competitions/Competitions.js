import React from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import memoize from 'lodash/memoize';
import uniq from 'lodash/uniq';

import Filter from '../Filter';
import Group from './Group';

const parseCompetitions = memoize(groups =>
  uniq(groups.map(group => group.competition)).sort()
);

class Competitions extends React.Component {
  onChangeFilter(type, value) {
    console.log(this.props, value);
    // const filterValues = this.props.filters[type]
    //   ? this.props.filters[type].slice(0)
    //   : [];
    // const ind = filterValues.indexOf(value);
    // if (ind === -1) {
    //   filterValues.push(value);
    // } else {
    //   filterValues.splice(ind, 1);
    // }
    // this.props.updateFixtureFilters({ [type]: filterValues });
  }

  render() {
    const competitions = parseCompetitions(this.props.groups);

    return (
      <div>
        <React.Fragment>
          <Filter
            options={competitions}
            selected={['foo']}
            onChange={option => this.onChangeFilter('competitions', option)}
          />
        </React.Fragment>
        {orderBy(this.props.groups, ['competition'], ['asc']).map(group => (
          <Group
            key={`${group.competition}: ${group.group}`}
            title={`${group.competition}: ${group.group}`}
            teams={group.teams}
          />
        ))}
      </div>
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
