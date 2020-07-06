import React from 'react';

import styles from './Grid.module.css';

type Props = { children: React.ReactNode };

const Grid = ({ children }: Props) => (
  <div className={styles.root}>{children}</div>
);

export default Grid;
