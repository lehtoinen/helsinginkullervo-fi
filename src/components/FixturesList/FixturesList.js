import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFixtures } from '../../state/actions';

import FixturesFilter from './FixturesFilter';
import Fixture from './Fixture';
import DateBadge from './DateBadge';

import styles from './FixturesList.module.scss';

export class FixturesList extends React.Component {
  constructor() {
    super();
    this.state = { fixtures: [], filters: { competitions: [] } };
  }

  componentDidMount() {
    this.props.fetchFixtures(this.props.fixturesURL);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fixtures !== this.props.fixtures) {
      this.parseEvents(nextProps.fixtures);
    }
  }

  onChangeFilter(type, value) {
    const filterValues = this.state.filters[type].slice(0);
    const ind = filterValues.indexOf(value);
    if (ind === -1) {
      filterValues.push(value);
    } else {
      filterValues.splice(ind, 1);
    }
    this.setState({
      filters: { ...this.state.filters, ...{ [type]: filterValues } },
    });
  }

  parseEvents(fixtures) {
    const competitions = [];
    fixtures.forEach(fixture => {
      const { competition } = fixture;
      if (competitions.indexOf(competition) === -1) {
        competitions.push(competition);
      }
    });

    this.setState({
      fixtures,
      competitions: competitions.sort(),
    });
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading ...</div>;
    }

    const { fixtures, filters, competitions } = this.state;
    let filteredFixtures = fixtures;
    if (filters.competitions.length > 0) {
      filteredFixtures = filteredFixtures.filter(
        fixture => filters.competitions.indexOf(fixture.competition) > -1
      );
    }

    let currentDate;

    return (
      <div className={styles.root}>
        {competitions && (
          <FixturesFilter
            options={competitions}
            selected={filters.competitions}
            onChange={competition =>
              this.onChangeFilter('competitions', competition)
            }
          />
        )}
        {filteredFixtures.map(fixture => {
          const addDateBadge = currentDate !== fixture.date.getTime();
          currentDate = fixture.date.getTime();
          return (
            <Fragment key={`${fixture.competition}${fixture.date.toString()}`}>
              {addDateBadge && (
                <DateBadge date={fixture.date} isPast={fixture.isCompleted} />
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
  isLoading: PropTypes.bool.isRequired,
  fixturesURL: PropTypes.string.isRequired,
  fixtures: PropTypes.arrayOf(PropTypes.object),
};

FixturesList.defaultProps = {
  fixtures: [],
};

const mapStateToProps = (state, props) => ({
  isLoading: state.fixturesLoading,
  fixtures: state.fixtures[props.fixturesURL],
});

const mapDispatchToProps = dispatch => ({
  fetchFixtures: url => dispatch(fetchFixtures(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FixturesList);
