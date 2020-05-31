import React from 'react';
import PropTypes from 'prop-types';

import BorderedContainer from './BorderedContainer';

import styles from './Article.module.css';

const Article = ({ children }) => (
  <div className={styles.root}>
    <BorderedContainer>{children}</BorderedContainer>
  </div>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
