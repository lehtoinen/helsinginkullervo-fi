import React from 'react';
import PropTypes from 'prop-types';

import styles from './Article.module.scss';
import BorderedContainer from './BorderedContainer';

const Article = ({ children }) => (
  <div className={styles.root}>
    <BorderedContainer>{children}</BorderedContainer>
  </div>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
