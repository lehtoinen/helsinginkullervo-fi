import React from 'react';

import logo from '../../assets/img/kullervo.svg';
import * as styles from './Logo.module.css';

const Logo = () => (
  <img src={logo} alt="Helsingin Kullervo logo" className={styles.root} />
);

export default Logo;
