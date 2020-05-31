import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniq from 'lodash/uniq';
import memoize from 'lodash/memoize';

import { updateFilters } from '../../state/actions';
import FilterType from '../../enum/FilterType';

import Filter from '../Filter';
import Fixture from './Fixture';
import DateBadge from './DateBadge';

const parseCompetitions = memoize((fixtures) =>
  uniq(fixtures.map((fixture) => fixture.competition)).sort()
);

export class FixturesList extends React.Component {
  competitions = parseCompetitions(this.props.fixtures || []);

  filterFixtures = (fixtures, filters) => {
    let filtered = fixtures.slice();

    // filter fixtures by completion status
    if (filters.upcoming && filters.upcoming.length) {
      filtered = filtered.filter((fixture) => !fixture.isCompleted);
    }

    // filter fixtures by competition
    if (filters.competitions) {
      const competitionFilters = filters.competitions.filter((competition) =>
        this.competitions.includes(competition)
      );
      if (competitionFilters.length) {
        filtered = filtered.filter((fixture) =>
          filters.competitions.includes(fixture.competition)
        );
      }
    }

    return filtered;
  };

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
    if (!this.props.fixtures || this.props.fixtures.length < 1) {
      return null;
    }

    const { filters } = this.props;
    const fixtures = this.filterFixtures(this.props.fixtures, filters);

    let currentDate;

    return (
      <div>
        <Fragment>
          <Filter
            group="competitions"
            options={this.competitions}
            selected={filters.competitions}
            onChange={(option) => this.onChangeFilter('competitions', option)}
          />
          <Filter
            group="competitions"
            options={['Näytä vain tulevat ottelut']}
            selected={filters.upcoming}
            onChange={(option) => this.onChangeFilter('upcoming', option)}
          />
        </Fragment>
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
              <Fixture {...fixture} />
            </Fragment>
          );
        })}
      </div>
    );
  }
}

FixturesList.propTypes = {
  updateFilters: PropTypes.func.isRequired,
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

const mapStateToProps = (state) => ({
  filters: { ...state.fixtureFilters },
});

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters) =>
    dispatch(updateFilters(FilterType.FIXTURES, filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FixturesList);
