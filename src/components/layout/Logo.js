import React from 'react';

import logo from '../../assets/img/kullervo.svg';
// import logo from '../../assets/img/kultsi_2019.svg';
import styles from './Logo.module.scss';

const Logo = () => (
  <img src={logo} alt="Helsingin Kullervo logo" className={styles.root} />
);

export default Logo;
