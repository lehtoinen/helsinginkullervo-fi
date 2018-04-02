import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NimenhuutoEventsTab from '../NimenhuutoEventsTab';

configure({ adapter: new Adapter() });

let baseProps = {
  label: 'Foo',
  loading: false,
  error: false,
  items: [
    {
      subject: 'Foo',
      location: 'Foo',
      date: new Date('2018-03-23'),
      time: 'Foo',
      url: 'Foo',
    },
  ],
};

describe('NimenhuutoEventsTab', () => {
  test('renders all items', () => {
    const props = { ...baseProps };
    const component = mount(<NimenhuutoEventsTab {...props} />);

    expect(component.find('.event-row')).toHaveLength(baseProps.items.length);
    expect(component).toMatchSnapshot();
  });

  test('renders "error" when { error: true }', () => {
    const props = { ...baseProps, ...{ error: true } };
    const component = mount(<NimenhuutoEventsTab {...props} />);

    expect(component.find('.error')).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });

  test('renders "loading" when { loading: true, items: [] }', () => {
    const props = { ...baseProps, ...{ loading: true, items: [] } };
    const component = mount(<NimenhuutoEventsTab {...props} />);

    expect(component.find('.loading')).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });

  test('renders "empty" when { loading: false, items: [] }', () => {
    const props = { ...baseProps, ...{ loading: false, items: [] } };
    const component = mount(<NimenhuutoEventsTab {...props} />);

    expect(component.find('.empty')).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });
});
