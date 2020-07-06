import React from 'react';
import classNames from 'classnames';

import styles from './Table.module.css';

export type TableRow = React.ReactElement & {
  highlight?: boolean;
};

type Props = {
  columnTitles?: React.ReactNode[];
  rows?: TableRow[];
};

const Table = ({ columnTitles = [], rows = [] }: Props) => (
  <div className={styles.root}>
    <div className={`${styles.tableRow} ${styles.tableHead}`}>
      {columnTitles.map((title) => title)}
    </div>
    {rows.map((row) => (
      <row.type
        key={row.key}
        {...row.props}
        {...{
          className: classNames(styles.tableRow, {
            [styles.highlight]: row.props.highlight,
          }),
        }}
      />
    ))}
  </div>
);

export default Table;
