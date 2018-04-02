import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header/Header';
import ColorPalette from '../components/Helpers/ColorPalette';

import './index.scss';
import { height } from 'window-size';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Helsingin Kullervo"
      meta={[
        { name: 'description', content: 'Helsingin Kullervo' },
        { name: 'keywords', content: 'kullervo, helsinki' },
      ]}
    />
    <ColorPalette />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
