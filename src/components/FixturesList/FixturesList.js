import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFixtureFilters } from '../../state/actions';

import FixturesFilter from './FixturesFilter';
import Fixture from './Fixture';
import DateBadge from './DateBadge';

export class FixturesList extends React.Component {
  static parseCompetitions(fixtures) {
    const competitions = [];
    fixtures.forEach(fixture => {
      const { competition } = fixture;
      if (!competitions.includes(competition)) {
        competitions.push(competition);
      }
    });
    return competitions.sort();
  }

  static filterFixtures(fixtures, filters) {
    let filtered = fixtures;

    // filter fixtures by completion status
    if (filters.upcoming && filters.upcoming.length) {
      filtered = filtered.slice(
        filtered.findIndex(fixture => !fixture.isCompleted)
      );
    }

    // filter fixtures by competition
    if (filters.competitions && filters.competitions.length) {
      filtered = filtered.filter(fixture =>
        filters.competitions.includes(fixture.competition)
      );
    }

    return filtered;
  }

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

    this.props.updateFixtureFilters({ [type]: filterValues });
  }

  render() {
    if (!this.props.fixtures || this.props.fixtures.length < 1) {
      return null;
    }

    const { filters } = this.props;
    const competitions = FixturesList.parseCompetitions(this.props.fixtures);
    const fixtures = FixturesList.filterFixtures(this.props.fixtures, filters);

    let currentDate;

    return (
      <div>
        <Fragment>
          <FixturesFilter
            options={competitions}
            selected={filters.competitions}
            onChange={option => this.onChangeFilter('competitions', option)}
          />
          <FixturesFilter
            options={['Näytä vain tulevat ottelut']}
            selected={filters.upcoming}
            onChange={option => this.onChangeFilter('upcoming', option)}
          />
        </Fragment>
        {fixtures.map(fixture => {
          const addDateBadge = currentDate !== fixture.date;
          currentDate = fixture.date;

          return (
            <Fragment key={`${fixture.competition}${fixture.date}`}>
              {addDateBadge && (
                <DateBadge
                  date={new Date(fixture.date)}
                  isPast={fixture.isCompleted}
                />
              )}
              <Fixture {...fixture} />
            </Fragment>
          );
        })}
      </div>
    );
  }
}

FixturesList.propTypes = {
  updateFixtureFilters: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.array).isRequired,
  fixtures: PropTypes.arrayOf(
    PropTypes.shape({
      awayScore: PropTypes.string,
      awayTeam: PropTypes.string,
      competition: PropTypes.string,
      date: PropTypes.string,
      homeScore: PropTypes.string,
      homeTeam: PropTypes.string,
      isCompleted: PropTypes.bool,
      source: PropTypes.string,
      time: PropTypes.string,
      timecode: PropTypes.string,
      venue: PropTypes.string,
    })
  ),
};

FixturesList.defaultProps = {
  fixtures: [],
};

const mapStateToProps = state => ({
  filters: state.fixtureFilters,
});

const mapDispatchToProps = dispatch => ({
  updateFixtureFilters: filters => dispatch(updateFixtureFilters(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FixturesList);
