import React from 'react';

import Fixtures from '../containers/Fixtures';
import Competitions from '../containers/Competitions';
import Layout from '../components/layout/Layout';
import Grid from '../components/layout/Grid';
import BorderedContainer from '../components/layout/BorderedContainer';

const IndexPage = () => (
  <Layout>
    <Grid>
      <BorderedContainer>
        <h3 id="otteluohjelma">Otteluohjelma</h3>
        <Fixtures />
      </BorderedContainer>
      <BorderedContainer>
        <h3 id="sarjataulukot">Sarjataulukot</h3>
        <Competitions />
      </BorderedContainer>
    </Grid>
  </Layout>
);

export default IndexPage;
