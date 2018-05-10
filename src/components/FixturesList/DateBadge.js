import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './DateBadge.module.scss';

const DateBadge = ({ date, isPast }) => {
  const eventDate = moment(date);
  const weekday = eventDate.locale('fi').format('dd');
  const dateStr = eventDate.locale('fi').format('DD.MM');

  return (
    <div className={`${styles.root} ${isPast ? styles.completed : null}`}>
      <div className={styles.day}>
        <div className={styles.weekday}>{weekday}</div>
        <div className={styles.date}>{dateStr}</div>
      </div>
    </div>
  );
};

DateBadge.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  isPast: PropTypes.bool.isRequired,
};

export default DateBadge;
