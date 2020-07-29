import React from 'react';
import classNames from 'classnames';

import styles from './Table.module.css';

export type TableRow = React.ReactElement & {
  highlight?: boolean;
};

type Props = {
  columnTitles?: React.ReactNode;
  rows?: TableRow[];
  className?: string;
};

const Table = ({ columnTitles = [], rows = [], className }: Props) => (
  <div className={classNames(styles.root, className)}>
    <div className={`${styles.tableRow} ${styles.tableHead}`}>
      {columnTitles}
    </div>
    {rows.map((row) => (
      <row.type
        key={row.key}
        {...row.props}
        {...{
          className: classNames(styles.tableRow, row.props.className),
        }}
      />
    ))}
  </div>
);

export default Table;
