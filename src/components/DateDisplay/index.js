import { Text } from '@geist-ui/react';
import React from 'react';
import datebuilder from '../../features/datebuilder';
import InfoItem from '../InfoItem';

const DateDisplay = () => {
  return (
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
  );
};

export default DateDisplay;
