import React from 'react';

// import BorderedContainer from './BorderedContainer';

import styles from './Article.module.css';

type Props = { children: React.ReactNode };

const Article = ({ children }: Props) => (
  <div className={styles.root}>
    {/* <BorderedContainer>{children}</BorderedContainer> */}
    {children}
  </div>
);

export default Article;
