import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../Header/Header';

import '../../assets/css/colors.css';
import '../../assets/css/backgrounds.css';
import './Layout.css';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
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
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
