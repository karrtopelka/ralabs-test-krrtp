import { Button, Grid, Text } from '@geist-ui/react';
import { CloudLightning, Moon, Sun } from '@geist-ui/react-icons';
import React from 'react';
import './Header.css';

const Header = ({ switchThemes, themeType }) => {
  return (
    <Grid.Container gap={2} justify="space-between" alignItems="center">
      <Grid>
        <Text h4 style={{ margin: 0 }}>
          Karrtopelka
          <span style={{ paddingLeft: 10, paddingRight: 10 }}>
            <CloudLightning
              size={16}
              color={themeType === 'light' ? 'red' : 'cyan'}
            />
          </span>
          weather
        </Text>
      </Grid>
      <Grid>
        <Button
          type={themeType === 'light' ? 'success' : 'warning'}
          ghost
          iconRight={themeType === 'light' ? <Moon /> : <Sun />}
          auto
          size="small"
          onClick={switchThemes}
        />
      </Grid>
    </Grid.Container>
  );
};

export default Header;
