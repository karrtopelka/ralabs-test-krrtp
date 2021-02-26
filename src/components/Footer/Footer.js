import { Grid, Text } from '@geist-ui/react';
import { Activity } from '@geist-ui/react-icons';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <Grid.Container justify="space-between" alignItems="center">
      <Grid xs={6}>
        <Text h4 style={{ margin: 0 }}>
          {new Date().getFullYear()}
        </Text>
      </Grid>
      <Grid xs={6}>
        <Text h4 style={{ margin: 0 }}>
          Ralabs{' '}
          <span>
            <Activity size={16} />
          </span>{' '}
          Karrtopelka
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default Footer;
