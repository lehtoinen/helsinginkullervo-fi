import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styles from './Header.module.css';
import Logo from '../layout/Logo';

export type Props = {
  anchorLinks?: {
    anchor: string;
    label: string;
  }[];
};

const Header = ({ anchorLinks }: Props) => (
  <nav className={styles.root}>
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
    {anchorLinks && (
      <span className={styles.anchorLinks}>
        {anchorLinks.map(({ anchor, label }) => (
          <AnchorLink key={anchor} offset="100" href={anchor}>
            {label}
          </AnchorLink>
        ))}
      </span>
    )}
  </nav>
);

export default Header;
