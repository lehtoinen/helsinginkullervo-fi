import React from 'react';

import styles from './BorderedContainer.module.css';

type Props = { children: React.ReactNode };

const BorderedContainer = ({ children }: Props) => (
  <div className={styles.root}>
    <div className={styles.background} />
    {children}
  </div>
);

export default BorderedContainer;
