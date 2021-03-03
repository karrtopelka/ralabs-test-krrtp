import { Grid, Text, useMediaQuery } from '@geist-ui/react';
import React from 'react';
import iconSwitcher from '../../features/iconSwitcher';
import AdditionalRow from '../AdditionalRow';
import CityName from '../CityName';
import DateDisplay from '../DateDisplay';
import InfoItem from '../InfoItem';
import MinMax from '../MinMax';
import WeatherType from '../WeatherType';

const Info = ({ weather }) => {
  const isSM = useMediaQuery('xs', { match: 'down' });
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={24} style={{ paddingBottom: 0 }}>
        <DateDisplay />
      </Grid>
      <Grid xs={24} style={{ paddingBottom: 0 }}>
        <CityName weather={weather} />
      </Grid>
      <Grid xs={24} style={{ paddingTop: 0 }}>
        <WeatherType weather={weather} />
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
        <MinMax isSM={isSM} weather={weather} />
      </Grid>
      <Grid xs={24}>
        <AdditionalRow isSM={isSM} weather={weather} />
      </Grid>
    </Grid.Container>
  );
};

export default Info;
