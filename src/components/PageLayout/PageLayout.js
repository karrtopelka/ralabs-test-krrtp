import { Page, useMediaQuery } from '@geist-ui/react';
import React from 'react';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './PageLayout.css';

const PageLayout = ({ switchThemes, themeType }) => {
  const isXS = useMediaQuery('xs', { match: 'down' });
  return (
    <Page>
      <Page.Header>
        <Header switchThemes={switchThemes} themeType={themeType} />
      </Page.Header>
      <Page.Content>
        <Content />
      </Page.Content>
      {!isXS && (
        <Page.Footer>
          <Footer />
        </Page.Footer>
      )}
    </Page>
  );
};

export default PageLayout;
