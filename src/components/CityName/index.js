import { Text } from '@geist-ui/react';
import React from 'react';
import InfoItem from '../InfoItem';

const CityName = ({ weather }) => {
  return (
    <InfoItem>
      <Text h3 text-align="center" style={{ margin: 0 }}>
        {weather.name}, {weather.sys.country}
      </Text>
    </InfoItem>
  );
};

export default CityName;
