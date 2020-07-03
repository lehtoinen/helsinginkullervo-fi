import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Location } from '@reach/router';

import styles from './Header.module.css';
import Logo from '../layout/Logo';

const Header = () => (
  <div className={styles.root}>
    <span>
      <Link
        to="/"
        style={{
          flex: '1 1',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        <Logo />
        <h4 className={styles.siteName}>Helsingin Kullervo</h4>
      </Link>
    </span>
    <span className={styles.anchorLinks}>
      <Location>
        {({ location }) =>
          location.pathname == '/' ? (
            <React.Fragment>
              <AnchorLink offset="100" href="#otteluohjelma">
                Otteluohjelma
              </AnchorLink>
              <AnchorLink offset="100" href="#sarjataulukot">
                Sarjataulukot
              </AnchorLink>
            </React.Fragment>
          ) : null
        }
      </Location>
    </span>
  </div>
);

export default Header;
