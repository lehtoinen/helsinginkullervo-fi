import React from 'react';
import PropTypes from 'prop-types';

import styles from './BorderedContainer.module.scss';

const BorderedContainer = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

BorderedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BorderedContainer;
