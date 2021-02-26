import { Col, Grid, useMediaQuery } from '@geist-ui/react';
import React from 'react';
import SmallColumn from '../SmallColumn/SmallColumn';

const AdditionalRow = ({ isSM, weather }) => {
  const isXS = useMediaQuery('xs', { match: 'down' });

  return (
    <>
      {!isSM && <Col span={4} />}
      <Grid.Container gap={2} justify="space-between" alignItems="center">
        <Grid sm xs={12}>
          <SmallColumn
            text1={'wind speed'}
            text2={`${weather.wind.speed} m/s`}
            p
            r={isXS}
          />
        </Grid>
        <Grid sm xs={12}>
          <SmallColumn
            text1={'feels like'}
            text2={`${weather.main.feels_like}°C`}
            p
          />
        </Grid>
        <Grid sm xs={12}>
          <SmallColumn
            text1={'pressure'}
            text2={`${weather.main.pressure} inHg`}
            p
            r={isXS}
          />
        </Grid>
        <Grid sm xs={12}>
          <SmallColumn
            text1={'humidity'}
            text2={`${weather.main.humidity}%`}
            p
          />
        </Grid>
      </Grid.Container>
      {!isSM && <Col span={4} />}
    </>
  );
};

export default AdditionalRow;
