import { Col, Grid, Row, Text, useMediaQuery } from '@geist-ui/react';
import React from 'react';
import datebuilder from '../../features/datebuilder';
import iconSwitcher from '../../features/iconSwitcher';
import InfoItem from '../InfoItem/InfoItem';

const Info = ({ weather }) => {
  const isSM = useMediaQuery('xs', { match: 'down' });
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={24} style={{ paddingBottom: 0 }}>
        <InfoItem>
          <Text
            p
            size={12}
            text-align="center"
            style={{ margin: 0, color: '#ccc' }}
          >
            {datebuilder(new Date())}
          </Text>
        </InfoItem>
      </Grid>
      <Grid xs={24} style={{ paddingBottom: 0 }}>
        <InfoItem>
          <Text h3 text-align="center" style={{ margin: 0 }}>
            {weather.name}, {weather.sys.country}
          </Text>
        </InfoItem>
      </Grid>
      <Grid xs={24} style={{ paddingTop: 0 }}>
        <InfoItem>
          <Text h5 text-align="center" style={{ margin: 0, color: '#ccc' }}>
            {weather.weather[0].main}
          </Text>
        </InfoItem>
      </Grid>
      <Grid xs={24}>
        <InfoItem>{iconSwitcher(weather.weather[0].main)}</InfoItem>
      </Grid>
      <Grid xs={24} style={{ paddingBottom: 0, paddingTop: 0 }}>
        <InfoItem>
          <Text h1>{Math.round(weather.main.temp)}°C</Text>
        </InfoItem>
      </Grid>
      <Grid xs={24} style={{ paddingTop: 0, margin: -10 }}>
        <InfoItem>
          <Row>
            {!isSM && <Col span={64} />}
            <Col>
              <div style={{ display: 'flex' }}>
                <Col>
                  <Text h6 style={{ margin: 0, color: '#ccc' }}>
                    Min
                  </Text>
                  <Text h6 style={{ margin: 0, color: '#ccc' }}>
                    {Math.round(weather.main.temp_min)}°C
                  </Text>
                </Col>
                <Col>
                  <Text h6 style={{ margin: 0, color: '#ccc' }}>
                    Max
                  </Text>
                  <Text h6 style={{ margin: 0, color: '#ccc' }}>
                    {Math.round(weather.main.temp_max)}°C
                  </Text>
                </Col>
              </div>
            </Col>
            {!isSM && <Col span={64} />}
          </Row>
        </InfoItem>
      </Grid>
    </Grid.Container>
  );
};

export default Info;
