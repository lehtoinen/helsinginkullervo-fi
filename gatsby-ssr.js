import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { store } from './src/state/store';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // Connect Redux store
  const ConnectedBody = () => (
    <Provider store={store}>{bodyComponent}</Provider>
  );
  const html = renderToString(<ConnectedBody />);
  replaceBodyHTMLString(html);
};
