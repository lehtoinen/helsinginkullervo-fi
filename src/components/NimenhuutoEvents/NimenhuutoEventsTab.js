import React from 'react';
import PropTypes from 'prop-types';
import CSV from 'comma-separated-values';
import moment from 'moment';

import styles from './NimenhuutoEventsTab.module.scss';

const NimenhuutoEventsTab = ({ label, items, loading, error }) => {
  let state;
  if (error) {
    return <div className="error">Lataaminen epäonnistui!</div>;
  } else if (loading && !items.length) {
    return <div className="loading">Ladataan...</div>;
  } else if (!loading && !items.length) {
    return <div className="empty">Ei tulevia tapahtumia.</div>;
  }

  return (
    <div className={styles.root}>
      {items.map(item => {
        const { subject, location, date, time, url, description } = item;
        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`event-row ${styles.row}`}
            key={`${subject}${date}${time}`}
          >
            <DateBadge dateStr={date} />
            <div className={styles.info}>
              <div className={styles.subject}>
                {/* subject contains the name of the nimenhuuto-instance (for example "Kullervo: ...")
                stripping that to avoid unnecessary repetition */
                subject.substr(subject.indexOf(': ') + 2)}
                {/* {description && <span>&nbsp;i</span>} */}
              </div>
              <div className={styles.details}>
                <span className={styles.time}>Klo {time}</span>
                <span className={styles.location}>{location}</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

NimenhuutoEventsTab.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      date: PropTypes.date,
      time: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

const DateBadge = ({ dateStr }) => {
  moment.locale('fi');
  const eventDate = moment(dateStr);
  const weekday = eventDate.format('dd');
  const date = eventDate.format('DD.MM');

  return (
    <div className={styles.day}>
      <div className={styles.weekday}>{weekday}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

export default NimenhuutoEventsTab;

// TODO/IMPROVEMENT: Add a collapse for the description when available  (> / ▼ -icon)
