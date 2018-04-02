import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NimenhuutoEvents from '../NimenhuutoEvents';
import NimenhuutoEventsTab from '../NimenhuutoEventsTab';

import mockData from '../__mocks__/nimenhuutoMock.js';

configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');

const sources = [{ label: 'Foo', url: 'foo' }, { label: 'Bar', url: 'bar' }];

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe('NimenhuutoEvents', () => {
  test('fetches data for all sources', () => {
    fetch.mockResponse(mockData, { status: 200 });
    const component = mount(<NimenhuutoEvents sources={sources} />);

    return flushPromises().then(() => {
      expect(fetch.mock.calls).toHaveLength(2);
    });
  });

  test('renders with valid sources', () => {
    fetch.mockResponse(mockData, { status: 200 });
    const component = mount(<NimenhuutoEvents sources={sources} />);

    return flushPromises().then(() => {
      component.update();
      expect(component).toMatchSnapshot();
    });
  });

  test('renders with invalid csv data', () => {
    fetch.mockResponse('foobar', { status: 200 });
    const component = mount(<NimenhuutoEvents sources={sources} />);

    return flushPromises().then(() => {
      component.update();
      expect(component).toMatchSnapshot();
    });
  });

  test('renders with erroneous http response for csv data fetch', () => {
    fetch.mockResponse('foobar', { status: 404 });
    const component = mount(<NimenhuutoEvents sources={sources} />);

    return flushPromises().then(() => {
      component.update();
      expect(component).toMatchSnapshot();
    });
  });
});
