import React from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/Layout';
import Article from '../components/layout/Article';

type Props = {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
};

const Page = ({ data }: Props) => {
  const img = data.file?.childImageSharp?.fluid;

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
        {img && (
          <figure
            style={{ width: '400px', float: 'right' }}
            className="hideSmall"
          >
            <Img
              fluid={img}
              alt="Urheilijoita Kallion urheilukentällä (Brahen kenttä)"
            />
            <figcaption>
              Kullervon urheilijoita Brahen kentällä. Jani Köykkä, 2019
              <br />
              <i>
                Lähde:{' '}
                <a
                  href="https://www.facebook.com/pg/helsinginkullervo/photos/?tab=album&album_id=2558911010868690&__xts__%5B0%5D=68.ARBvx6QTT5_uWhiZ_xjMxa9t4HB3_B0BYd8hcC0-QFDhswVv02WXlVDEk1Lr_mxZg7JzimegbMlGiF4UFcrMyvEWDSfV7j6I_jNEQ65bT8DJVcMFjVCJMC8QJixUWefRJvrx3jgx3Ol5unnTeEbhjSo1AtevKWHTACsEKhR-hXdt7V5MLP7t9PMo7Rhx54VZ4HTwRJ6axdAnn80nIh-299eY9Jyiip-9OaFwEJqx3ImXvDSiRE_C7DUgJCcZaaed0vdR3n-05JEHCXzZ1pz4bkim-Nm83hP4UhrMShtdz9ulIqljjQMj-5hCol-414hdNUPwc6U0JUBVjV65daaR60ZuL-t7rEeORXZ3q9JbIPpwCy9ftLd00IIhGJb-_RpGj30F0hc-Y4XCfcD8budtsVPQDAyZixzaAlqeaiJOinf_41l-PhoroWgcNuSXaBmFZbWOxzM7MUTdG4dGMqne&__tn__=-UC-R"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kullervo 100-v.
                </a>
              </i>
            </figcaption>
          </figure>
        )}
        <p>
          Seuran joukkueet pelasivat Brakulla ystävyysottelut.
          Ikämiesjoukkueiden vieraiksi saapuivat <i>Puotinkylän Valtti</i>,
          penkkinsä päässä valmentajalegenda Antti Muurinen, sekä takavuosien
          kultsilaisen, kansanedustaja Paavo Arhinmäen edustama,{' '}
          <i>Eduskunnan urheilukerhon jalkapallojoukkue</i>. Maju-kokemusta oli
          muuten tälläkin penkillä! Päivän huipensi Kullervon kahden
          miesjoukkueen keskinäinen ottelu, jossa laitettiin testiin seuran
          sisäinen nokkimisjärjestys.
        </p>
        <p>
          Aurinkoinen ja lämmin syyssää helli sekä pelaajia että katsojia.
          Kentällä ja kentän laidalla päivään osallistuneita nähtiin runsain
          mitoin nykyisiä ja entisiä kultsilaisia sekä muuten seuran toiminnasta
          kiinnostuneita.
        </p>
        <p>
          Brakun lisäksi kiitoksensa saivat päivällä Työväenopistolla Kultsin
          nykyiset ja entiset vapaaehtoiset ja yhteistyökumppanit sekä illalla
          pelaajat puolisoineen. Kiitos kaikille osallistuneille mahtavasta
          päivästä!
        </p>
        <p>
          <a
            href="https://www.facebook.com/pg/helsinginkullervo/photos/?tab=album&album_id=2558911010868690&__xts__%5B0%5D=68.ARBvx6QTT5_uWhiZ_xjMxa9t4HB3_B0BYd8hcC0-QFDhswVv02WXlVDEk1Lr_mxZg7JzimegbMlGiF4UFcrMyvEWDSfV7j6I_jNEQ65bT8DJVcMFjVCJMC8QJixUWefRJvrx3jgx3Ol5unnTeEbhjSo1AtevKWHTACsEKhR-hXdt7V5MLP7t9PMo7Rhx54VZ4HTwRJ6axdAnn80nIh-299eY9Jyiip-9OaFwEJqx3ImXvDSiRE_C7DUgJCcZaaed0vdR3n-05JEHCXzZ1pz4bkim-Nm83hP4UhrMShtdz9ulIqljjQMj-5hCol-414hdNUPwc6U0JUBVjV65daaR60ZuL-t7rEeORXZ3q9JbIPpwCy9ftLd00IIhGJb-_RpGj30F0hc-Y4XCfcD8budtsVPQDAyZixzaAlqeaiJOinf_41l-PhoroWgcNuSXaBmFZbWOxzM7MUTdG4dGMqne&__tn__=-UC-R"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kuvia juhlapäivästä Facebookissa
          </a>
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

export default Page;

export const query = graphql`
  {
    file(relativePath: { eq: "img/100-v-braku.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
