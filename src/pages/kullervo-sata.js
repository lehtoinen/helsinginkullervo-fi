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
          <b>Helsingin Kullervo</b> perustettiin helmikuun 7. päivänä 1919.
          Satavuotiaan seuran taivalta juhlistettiin lauantaina 28. syyskuuta.
          Merkkipäivän kunniaksi Kultsi järjesti avoimen tapahtuman
          kotikentällään Brahella.
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
          Seuran joukkueet pelasivat Brakulla ystävyysottelut.
          Ikämiesjoukkueiden vieraiksi saapuivat <i>Puotinkylän Valtti</i>,
          penkkinsä päässä valmentajalegenda Antti Muurinen, sekä takavuosien
          kultsilaisen, kansanedustaja Paavo Arhinmäen edustama,{' '}
          <i>Eduskunnan urheilukerhon jalkapallojoukkue</i>. Päivän huipensi
          Kullervon kahden miesjoukkueen keskinäinen ottelu, jossa laitettiin
          testiin seuran sisäinen nokkimisjärjestys.
        </p>
        <p>
          Aurinkoinen ja lämmin syyssää helli sekä pelaajia että katsojia.
          Kentällä ja kentän laidalla päivään osallistuneita nähtiin runsain
          mitoin nykyisiä ja entisiä kultsilaisia sekä muuten seuran toiminnasta
          kiinnostuneita.
        </p>
        <p>
          Juhlatarjoiluista vastasivat{' '}
          <a
            href="https://www.opistolaisyhdistys.fi/oppiskahvio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oppiskahvio
          </a>{' '}
          sekä{' '}
          <a
            href="https://www.facebook.com/Cafe-Cardemumma-124044734335593/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cafe Cardemumma
          </a>
          , molemmat suoraan Brakun naapurista.
        </p>
        <p>
          <b>Lämmin kiitos kaikille osallistujille!</b>
          <br />
          <i> - Helsingin Kullervo</i>
        </p>
        <h4>Ottelutulokset:</h4>
        <ul>
          <li>
            <i>
              Kullervo KKI-50/55 <b>2 - 4</b> Puotinkylän Valtti
            </i>
          </li>
          <li>
            <i>
              Kullervo KKI-35/40 <b>3 - 0</b> Eduskunnan urheilukerho
            </i>
          </li>
          <li>
            <i>
              Kullervo <b>0 - 3</b> Kullervo/Überkleber
            </i>
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
