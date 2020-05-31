import React from 'react';
import PropTypes from 'prop-types';

import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ style }) => (
  <div className={styles.root} style={style}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

LoadingSpinner.propTypes = {
  style: PropTypes.shape(),
};

LoadingSpinner.defaultProps = {
  style: {},
};

export default LoadingSpinner;
