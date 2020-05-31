import React from 'react';
import PropTypes from 'prop-types';

import styles from './BorderedContainer.module.css';

const BorderedContainer = ({ children }) => (
  <>
    <div className={styles.root}>
      <div className={styles.background} />
      {children}
    </div>
  </>
);

BorderedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BorderedContainer;
