import React from 'react';
import PropTypes from 'prop-types';
import CSV from 'comma-separated-values';

import NimenhuutoEventsTab from './NimenhuutoEventsTab';

import styles from './NimenhuutoEvents.module.scss';

class NimenhuutoEvents extends React.Component {
  constructor(props) {
    super();
    // hydrate state here if we have something stored!

    let sources = {};

    props.sources.forEach(source => {
      const { label, url } = source;
      sources[url] = { label, url, fetching: true, error: false, items: [] };
    });

    this.state = { sources, count: props.count };
  }

  componentDidMount() {
    const { sources } = this.props;
    sources.forEach(source => this.fetchEvents(source));
  }

  fetchEvents(source) {
    fetch(`${source.url}/calendar/csv`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then(data => {
        if (!data) throw Error('No data');
        const csv = new CSV(data, { header: true });
        const parsed = csv.parse();
        const items = parsed.map(item => {
          // the Description field has the url to the event in the beginning + description text if given (space-separated)
          const ind = item.Description.indexOf(' ');
          const url =
            ind > -1 ? item.Description.substring(0, ind) : item.Description;
          const description = ind > -1 ? item.Description.substr(ind) : null;

          return {
            subject: item.Subject,
            location: item.Location,
            date: new Date(item['Start Date']),
            time: item['Start Time'],
            url,
            description,
          };
        });

        // copy current state, don't mutate!
        const sources = { ...this.state.sources };

        sources[source.url] = {
          ...sources[source.url],
          ...{ fetching: false, items },
        };
        this.setState({ sources });
      })
      .catch(e => {
        const sources = { ...this.state.sources };

        sources[source.url] = {
          ...sources[source.url],
          ...{ fetching: false, error: true },
        };

        this.setState({ sources });
      });
  }

  render() {
    const { sources, count } = this.state;

    return (
      <div className={styles.root}>
        {Object.keys(sources).map((key, index) => {
          const source = sources[key];
          return (
            <div
              key={key}
              className={`${styles.tab} ${
                styles[index === 0 ? 'active' : 'inactive']
              }`}
            >
              <NimenhuutoEventsTab
                label={source.label}
                items={source.items ? source.items.slice(0, count) : null}
                loading={source.fetching}
                error={source.error}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

NimenhuutoEvents.propTypes = {
  // data sources for the events
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  // amount of events to show on load
  count: PropTypes.number,
};

export default NimenhuutoEvents;
