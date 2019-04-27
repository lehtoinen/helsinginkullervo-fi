import React from 'react';
import PropTypes from 'prop-types';

import styles from './Grid.module.scss';

const Grid = ({ children }) => <div className={styles.root}>{children}</div>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
