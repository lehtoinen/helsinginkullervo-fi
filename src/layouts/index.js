import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header/Header';
// import ColorPalette from '../components/helpers/ColorPalette';

import './index.scss';

const TemplateWrapper = ({ children }) => (
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
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
