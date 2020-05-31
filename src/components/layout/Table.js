import React from 'react';
import PropTypes from 'prop-types';

import styles from './Table.module.css';

const Table = ({ columnTitles, rows }) => (
  <div className={styles.root}>
    <div className={`${styles.tableRow} ${styles.tableHead}`}>
      {columnTitles.map((title) => title)}
    </div>
    {rows.map((row) => (
      <row.type
        key={row.key}
        {...row.props}
        {...{
          className: `${styles.tableRow} ${
            row.props.highlight ? styles.highlight : null
          }`,
        }}
      />
    ))}
  </div>
);
// <div className={styles.tableRow}>{row}</div>)}

Table.propTypes = {
  columnTitles: PropTypes.arrayOf(PropTypes.node),
  rows: PropTypes.arrayOf(PropTypes.node),
};

Table.defaultProps = {
  columnTitles: [],
  rows: [],
};

export default Table;
