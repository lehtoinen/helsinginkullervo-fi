import React from 'react';

import NimenhuutoEvents from '../components/NimenhuutoEvents/NimenhuutoEvents';

const IndexPage = () => (
  <div>
    <NimenhuutoEvents
      sources={[
        { label: 'Jalkapallo', url: '//kullervo.nimenhuuto.com' },
        { label: 'Futsal', url: '//kullervofutsal.nimenhuuto.com' },
      ]}
      // count={8}
    />
  </div>
);

export default IndexPage;
