import React from 'react';

import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

import Footer from 'components/modules/Footer';
import Header from 'components/modules/Header';

import ISOContainer from './components/ISOContainer';
import RouteTree from './components/RouteTree';
import ScrollToTop from './components/ScrollToTop';
import Wrapper from './components/Wrapper';

const SOCIAL_MEDIA_ITEMS = [
  {
    name: 'facebook',
    icon: FaFacebookSquare,
    link: '#',
  },
  {
    name: 'whatsapp',
    icon: FaWhatsappSquare,
    link: '#',
  },
];

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Wrapper>
        <Header></Header>

        <ISOContainer as="main">
          <RouteTree></RouteTree>
        </ISOContainer>

        <Footer smItems={SOCIAL_MEDIA_ITEMS}></Footer>
      </Wrapper>
    </>
  );
}

export default App;