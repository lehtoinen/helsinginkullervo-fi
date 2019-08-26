import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy';
import memoize from 'lodash/memoize';
import uniq from 'lodash/uniq';

import { updateFilters } from '../../state/actions';
import FilterType from '../../enum/FilterType';

import Filter from '../Filter';
import Group from './Group';

const parseCompetitions = memoize(groups =>
  uniq(groups.map(group => `${group.competition}`)).sort()
);

const filterGroups = (groups, filters) => {
  let filtered = groups.slice();

  // filter tables by competition
  if (filters.competitions && filters.competitions.length) {
    filtered = filtered.filter(group =>
      filters.competitions.includes(group.competition)
    );
  }

  return filtered;
};

class CompetitionsTables extends React.Component {
  onChangeFilter(type, value) {
    const filterValues = this.props.filters[type]
      ? this.props.filters[type].slice(0)
      : [];
    const ind = filterValues.indexOf(value);
    if (ind === -1) {
      filterValues.push(value);
    } else {
      filterValues.splice(ind, 1);
    }
    this.props.updateFilters({ [type]: filterValues });
  }

  render() {
    const { filters } = this.props;
    const competitions = parseCompetitions(this.props.groups);
    const groups = filterGroups(this.props.groups, filters);

    return (
      <div>
        <React.Fragment>
          <Filter
            group="tables"
            options={competitions}
            selected={filters.competitions}
            onChange={option => this.onChangeFilter('competitions', option)}
          />
        </React.Fragment>
        {orderBy(groups, ['competition'], ['asc']).map(group => (
          <Group
            key={`${group.competition}: ${group.group}`}
            title={`${group.title}`}
            teams={group.teams}
          />
        ))}
      </div>
    );
  }
}

CompetitionsTables.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.array).isRequired,
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

CompetitionsTables.defaultProps = {
  groups: [],
};

const mapStateToProps = state => ({
  filters: state.tableFilters,
});

const mapDispatchToProps = dispatch => ({
  updateFilters: filters => dispatch(updateFilters(FilterType.TABLES, filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompetitionsTables);
