import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import Layout from '../components/layout/Layout';
import Article from '../components/layout/Article';

const Page = ({ data }) => {
  const img = get(data, 'file.childImageSharp.fluid', []);

  return (
    <Layout>
      <Helmet>
        <meta property="og:image" content={img.src} />
        <meta property="og:title" content="Helsingin Kullervo 100v!" />
        <meta
          property="og:description"
          content="Helsingin Kullervo juhlii syntymäpäiviään Brahen kentällä 28.9.2019."
        />
      </Helmet>
      <Article>
        <h2 id="otteluohjelma">Helsingin Kullervo 100 vuotta</h2>
        <p>
          <i>
            Lauantai 28.9.2019, klo 14-17:00
            <br />
            Brahen kenttä, Helsinginkatu 25a
          </i>
        </p>
        <p>
          <b>Helsingin Kullervo</b> perustettiin helmikuun 7. päivänä 1919.
          Satavuotiaan seuran taivalta juhlistetaan tulevan Kullervon päivän
          tienoilla lauantaina 28. syyskuuta. Merkkipäivän kunniaksi Kultsi
          järjestää kaikille avoimen tapahtuman kotikentällään Brahella.
        </p>
        <figure
          style={{ width: '400px', float: 'right' }}
          className="hideSmall"
        >
          <Img
            fluid={img}
            alt="Urheilijoita Kallion urheilukentällä (Brahen kenttä)"
          />
          <figcaption>
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
        <p>
          Seuran joukkueet pelaavat Brakulla ystävyysottelut. Ikämiesjoukkueiden
          vieraiksi saapuvat <i>Puotinkylän Valtti</i>, sekä takavuosien
          kultsilaisen, kansanedustaja Paavo Arhinmäen edustama,{' '}
          <i>Eduskunnan urheilukerhon jalkapallojoukkue</i>. Päivän huipentaa
          Kullervon kahden miesjoukkueen keskinäinen ottelu, jossa laitetaan
          testiin seuran sisäinen nokkimisjärjestys.
        </p>
        <p>
          Toivotamme kaikki nykyiset ja entiset kultsilaiset sekä muuten seuran
          toiminnasta kiinnostuneet tervetulleiksi mukaan juhlistamaan
          satavuotista taivalta! Kasaa mukaan vanhat pelikaverit ja tule
          tapaamaan nykytoimijoita ja vanhoja tuttuja, muistelemaan menneitä
          sekä pohtimaan tulevaa.
        </p>
        <p>
          Tarjolla tottakai juhlakahvit ja{' '}
          <a
            href="https://www.facebook.com/Cafe-Cardemumma-124044734335593/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cafe Cardemumman
          </a>{' '}
          korvapuustia suoraan Brakun naapurista. Myynnissä myös erä
          Kullervo-huiveja, sekä t-paitoja!
        </p>
        <p>
          <a
            href="https://www.facebook.com/events/877474752630175/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tapahtuma Facebookissa &raquo;
          </a>
        </p>
        <h4>Otteluohjelma:</h4>
        <ul>
          <li>
            klo 14:00, <i>Kullervo KKI-50/55 - Puotinkylän Valtti</i>
          </li>
          <li>
            klo 15:00, <i>Kullervo KKI-35/40 - Eduskunnan urheilukerho</i>
          </li>
          <li>
            klo 16:00, <i>Kullervo - Kullervo/Überkleber</i>
          </li>
        </ul>
        <p>
          Lisätiedot: Anssi Lehtonen, puh. 050-3687 367,
          anssi.lehtonen(at)outlook.com
        </p>
      </Article>
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
