import { Card, Text } from '@geist-ui/react';
import React from 'react';
import Info from '../Info/Info';

const WeatherInfo = ({ weather }) => {
  return (
    <Card shadow>
      {typeof weather.main != 'undefined' ? (
        <Info weather={weather} />
      ) : (
        <>
          <Text h3>Nothing found 😌</Text>
          <Text p>(that's not a problem, just try to find again)</Text>
        </>
      )}
    </Card>
  );
};

export default WeatherInfo;
