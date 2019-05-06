import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styles from './Header.module.scss';
import Logo from '../layout/Logo';

const Header = () => (
  <div className={styles.root}>
    <span>
      <Logo />
      <h4>Helsingin Kullervo</h4>
    </span>
    <span className={styles.anchorLinks}>
      <AnchorLink offset="100" href="#otteluohjelma">
        Otteluohjelma
      </AnchorLink>
      <AnchorLink offset="100" href="#sarjataulukot">
        Sarjataulukot
      </AnchorLink>
    </span>
  </div>
);

export default Header;
