import React from 'react';

import FixturesList from '../components/FixturesList/FixturesList';

const IndexPage = () => (
  <div>
    <FixturesList fixturesURL="/api/getFixtures/?season_id=2018&club_id=571" />
  </div>
);

export default IndexPage;
