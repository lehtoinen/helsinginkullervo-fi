import React from 'react';

import Fixtures from '../containers/Fixtures';
import Competitions from '../containers/Competitions';
import Layout from '../components/layout/Layout';
import Header from '../components/Header/Header';
import Grid from '../components/layout/Grid';
import BorderedContainer from '../components/layout/BorderedContainer';

const IndexPage = () => (
  <Layout
    header={
      <Header
        anchorLinks={[
          { anchor: '#otteluohjelma', label: 'Otteluohjelma' },
          { anchor: '#sarjataulukot', label: 'Sarjataulukot' },
        ]}
      />
    }
  >
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
