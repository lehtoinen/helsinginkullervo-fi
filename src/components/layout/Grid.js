import React from 'react';
import PropTypes from 'prop-types';

import styles from './Grid.module.css';

const Grid = ({ children }) => <div className={styles.root}>{children}</div>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
