import { Button, Page, Text, useMediaQuery } from '@geist-ui/react';
import { Activity, Moon, Sun } from '@geist-ui/react-icons';
import React from 'react';
import Bar from '../Bar/Bar';
import Content from '../Content/Content';

const PageLayout = ({ switchThemes, themeType }) => {
  const isXS = useMediaQuery('xs', { match: 'down' });
  return (
    <Page>
      <Page.Header>
        <Bar
          left={
            <Text h4 style={{ margin: 0 }}>
              Karrtopelka
            </Text>
          }
          right={
            <Button
              type={themeType === 'light' ? 'success' : 'warning'}
              ghost
              iconRight={themeType === 'light' ? <Moon /> : <Sun />}
              auto
              size="small"
              onClick={switchThemes}
            />
          }
          switchThemes={switchThemes}
          themeType={themeType}
        />
      </Page.Header>
      <Page.Content>
        <Content />
      </Page.Content>
      {!isXS && (
        <Page.Footer>
          <Bar
            left={
              <Text p style={{ margin: 0 }}>
                {new Date().getFullYear()}
              </Text>
            }
            right={
              <Text p style={{ margin: 0 }}>
                Ralabs{' '}
                <span>
                  <Activity size={16} />
                </span>{' '}
                Karrtopelka
              </Text>
            }
          />
        </Page.Footer>
      )}
    </Page>
  );
};

export default PageLayout;
