import React from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Box, Flex, Heading } from '@chakra-ui/react';

import Container from 'components/elements/Container';

import ContactForm from './components/ContactForm';
import OtherContact from './components/OtherContact';

function ContactPage() {
  const { t } = useTranslation('contact');
  return (
    <>
      <Helmet>
        <title>{t('html.title')}</title>
        <meta name="description" content={t('html.meta')} />
      </Helmet>
      <Box as="article" my={12}>
        <Container
          as="section"
          bg="base"
          mb={12}
          py={12}
          textAlign="center"
          isFluid
        >
          <Heading as="h1" color="white" textTransform="uppercase">
            {t('title')}
          </Heading>
        </Container>
        <Container as="section">
          <Flex flexDir={{ base: 'column', md: 'row' }}>
            <ContactForm
              {...{
                mb: { base: 4, md: 0 },
                mr: { base: 0, md: 8 },
                w: { base: '100%', md: '66%' },
              }}
            ></ContactForm>
            <OtherContact w={{ base: '100%', md: '33%' }}></OtherContact>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default ContactPage;
