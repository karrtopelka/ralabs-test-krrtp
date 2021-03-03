import { Col, Grid } from '@geist-ui/react';
import React from 'react';
import SmallColumn from '../SmallColumn';

const MinMax = ({ isSM, weather }) => {
  return (
    <>
      {!isSM && <Col span={36} />}
      <Grid.Container gap={2} justify="space-between" alignItems="center">
        <Grid sm xs={12}>
          <SmallColumn
            text1="Min"
            text2={`${Math.round(weather.main.temp_min)}°C`}
            r
          />
        </Grid>

        <Grid sm xs={12}>
          <SmallColumn
            text1="Max"
            text2={`${Math.round(weather.main.temp_max)}°C`}
          />
        </Grid>
      </Grid.Container>
      {!isSM && <Col span={36} />}
    </>
  );
};

export default MinMax;
