import React from 'react';
import { format } from 'date-fns';
import { fi } from 'date-fns/locale';

import * as styles from './DateBadge.module.css';

type Props = {
  date: Date;
  isPast: boolean;
};

const DateBadge = ({ date, isPast }: Props) => {
  const weekday = format(date, 'EEEEEE', { locale: fi });
  const dateStr = format(date, 'dd.MM');

  return (
    <div className={`${styles.root} ${isPast ? styles.completed : null}`}>
      <div className={styles.day}>
        <div className={styles.weekday}>{weekday}</div>
        <div className={styles.date}>{dateStr}</div>
      </div>
    </div>
  );
};

export default DateBadge;
