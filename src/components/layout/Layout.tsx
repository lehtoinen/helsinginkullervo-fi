import React, { ReactElement } from 'react';
import { Helmet, HelmetProps } from 'react-helmet';

import Header, { Props as HeaderProps } from '../Header/Header';

import '../../assets/css/colors.css';
import '../../assets/css/backgrounds.css';
import './Layout.css';

type Props = {
  children: React.ReactNode;
  helmet?: ReactElement<HelmetProps>;
  header?: ReactElement<HeaderProps>;
};

const defaultHelmet = (
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
);

const Layout = ({
  children,
  header = <Header />,
  helmet = defaultHelmet,
}: Props) => (
  <>
    {helmet}
    {header}
    <main>{children}</main>
  </>
);

export default Layout;
