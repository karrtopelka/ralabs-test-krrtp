import { Text } from '@geist-ui/react';
import React from 'react';
import InfoItem from '../InfoItem';

const WeatherType = ({ weather }) => {
  return (
    <InfoItem>
      <Text h5 text-align="center" style={{ margin: 0, color: '#ccc' }}>
        {weather.weather[0].main}
      </Text>
    </InfoItem>
  );
};

export default WeatherType;
