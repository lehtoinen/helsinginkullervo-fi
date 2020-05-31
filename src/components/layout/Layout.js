import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from '../Header/Header';

import '../../assets/css/colors.css';
import './Layout.css';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Helsingin Kullervo"
      meta={[
        {
          name: 'description',
          content:
            'Helsingin Kullervo on vuonna 1919 perustettu helsinkiläinen jalkapallo- ja futsalseura.',
        },
        { name: 'keywords', content: 'kullervo, helsinki' },
      ]}
    />
    {/* <ColorPalette /> */}
    <Header />
    <div>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
