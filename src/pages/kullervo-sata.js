import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout/Layout';
import BorderedContainer from '../components/layout/BorderedContainer';

const Page = ({ data }) => {
  const img = get(data, 'file.childImageSharp.fluid', []);

  return (
    <Layout>
      <div style={{ maxWidth: '60em', margin: '0 auto' }}>
        <BorderedContainer>
          <h2 id="otteluohjelma">Helsingin Kullervo 100 vuotta</h2>
          <p
            style={{
              lineHeight: 1.5,
            }}
          >
            <i>
              Lauantai 28.9.2019, klo 14-17:00
              <br />
              Brahen kenttä, Helsinginkatu 25a
            </i>
          </p>
          <p
            style={{
              lineHeight: 1.5,
            }}
          >
            <b>Helsingin Kullervo</b> perustettiin helmikuun 7. päivänä 1919.
            Satavuotiaan seuran taivalta juhlistetaan tulevan Kullervon päivän
            tienoilla lauantaina 28. syyskuuta. Merkkipäivän kunniaksi Kultsi
            järjestää kaikille avoimen tapahtuman kotikentällään Brahella.
          </p>
          <figure
            style={{ width: '400px', float: 'right', margin: '0.25em 1.5em' }}
            className="hideSmall"
          >
            <Img
              fluid={img}
              alt="Urheilijoita Kallion urheilukentällä (Brahen kenttä)"
            />
            <figcaption
              style={{ fontSize: '0.7em', lineHeight: 1.4, margin: '0.5em 0' }}
            >
              Kullervon urheilijoita Brahen kentällä. Väinö Kannisto, 1947
              <br />
              <i>
                Lähde:{' '}
                <a
                  href="https://hkm.finna.fi/Record/hkm.HKMS000005:000003ha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Helsingin Kaupunginmuseo
                </a>
              </i>
            </figcaption>
          </figure>
          <p
            style={{
              lineHeight: 1.5,
            }}
          >
            Seuran joukkueet pelaavat Brakulla ystävyysottelut.
            Ikämiesjoukkueiden vieraiksi saapuvat <i>Puotinkylän Valtti</i>,
            sekä takavuosien kultsilaisen, kansanedustaja <i>Paavo Arhinmäen</i>{' '}
            edustama, <i>Eduskunnan jalkapallojoukkue</i>. Päivän huipentaa
            Kullervon kahden miesjoukkueen keskinäinen ottelu, jossa laitetaan
            testiin seuran sisäinen nokkimisjärjestys.
          </p>
          <p
            style={{
              lineHeight: 1.5,
            }}
          >
            Toivotamme kaikki nykyiset ja entiset kultsilaiset sekä muuten
            seuran toiminnasta kiinnostuneet tervetulleiksi mukaan juhlistamaan
            satavuotista taivalta! Kasaa mukaan vanhat pelikaverit ja tule
            tapaamaan nykytoimijoita ja vanhoja tuttuja, muistelemaan menneitä
            sekä pohtimaan tulevaa.
          </p>
          <h4>Otteluohjelma:</h4>
          <ul>
            <li>
              klo 14:00, <i>Kullervo KKI-50/55 - Puotinkylän Valtti</i>
            </li>
            <li>
              klo 15:00,{' '}
              <i>Kullervo KKI-35/40 - Eduskunnan jalkapallojoukkue</i>
            </li>
            <li>
              klo 16:00, <i>Kullervo - Kullervo/Überkleber</i>
            </li>
          </ul>
          <p
            style={{
              lineHeight: 1.5,
            }}
          >
            Lisätiedot: Anssi Lehtonen, puh. 050-3687 367,
            anssi.lehtonen(at)outlook.com
          </p>
        </BorderedContainer>
      </div>
    </Layout>
  );
};

Page.propTypes = {};

export default Page;

// eslint-disable-next-line no-undef
export const query = graphql`
  {
    file(relativePath: { eq: "img/brakulla.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
