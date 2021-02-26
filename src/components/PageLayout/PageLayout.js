import { Page } from '@geist-ui/react';
import React from 'react';
import Header from '../Header/Header';
import './PageLayout.css';

const PageLayout = ({ switchThemes, themeType }) => {
  return (
    <Page>
      <Page.Header>
        <Header switchThemes={switchThemes} themeType={themeType} />
      </Page.Header>
    </Page>
  );
};

export default PageLayout;
