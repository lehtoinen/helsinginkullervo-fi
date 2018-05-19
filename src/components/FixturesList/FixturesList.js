import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash.isequal';
import { fetchFixtures, updateFixtureFilters } from '../../state/actions';

import FixturesFilter from './FixturesFilter';
import Fixture from './Fixture';
import DateBadge from './DateBadge';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import styles from './FixturesList.module.scss';

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

    // filter fixtures by date
    if (filters.upcoming && filters.upcoming.length) {
      const today = new Date();
      filtered = filtered.slice(
        filtered.findIndex(fixture => new Date(fixture.date) >= today)
      );
    }

    // filter fixtures by competition
    if (filters.competitions && filters.competitions.length > 0) {
      filtered = filtered.filter(fixture =>
        filters.competitions.includes(fixture.competition)
      );
    }

    return filtered;
  }

  constructor() {
    super();
    this.state = { fixtures: [] };
  }

  componentDidMount() {
    this.props.fetchFixtures(this.props.fixturesURL);
  }

  componentWillReceiveProps(nextProps) {
    let newState = {};

    // Checking if the fixtures are updated.
    //  - Is the nextProps.fixtures length different to rendered fixtures?
    //  - Are objects in nextProps.fixtures different to fixtures in current props?
    const fixturesUpdated =
      nextProps.fixtures.length !== this.state.fixtures.length ||
      nextProps.fixtures.some(
        (obj, ind) => !isEqual(obj, this.props.fixtures[ind])
      );

    // Checking if the filters are updated.
    const filtersUpdated = nextProps.filters === this.props.filters;

    if (fixturesUpdated || filtersUpdated) {
      newState = {
        ...newState,
        ...{
          fixtures: FixturesList.filterFixtures(
            nextProps.fixtures,
            nextProps.filters
          ),
          competitions: FixturesList.parseCompetitions(nextProps.fixtures),
        },
      };
    }

    // Anything new in the state?
    if (Object.keys(newState).length) {
      this.setState(newState);
    }
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
    console.log('render!');
    const { fixtures, competitions } = this.state;
    const { filters } = this.props;

    let currentDate;

    return (
      <div className={styles.root}>
        {competitions && (
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
        )}
        {this.props.isLoading && (
          <LoadingSpinner
            style={{
              fontSize: '0.5em',
              position: 'absolute',
              top: '2em',
              right: '2em',
            }}
          />
        )}
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
  fetchFixtures: PropTypes.func.isRequired,
  updateFixtureFilters: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fixturesURL: PropTypes.string.isRequired,
  filters: PropTypes.shape().isRequired,
  fixtures: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, props) => ({
  isLoading: state.fixturesLoading,
  fixtures: state.fixtures[props.fixturesURL],
  filters: state.fixtureFilters,
});

const mapDispatchToProps = dispatch => ({
  fetchFixtures: url => dispatch(fetchFixtures(url)),
  updateFixtureFilters: filters => dispatch(updateFixtureFilters(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FixturesList);
