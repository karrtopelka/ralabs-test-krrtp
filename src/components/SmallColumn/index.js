import { Col, Text } from '@geist-ui/react';
import React from 'react';

const SmallColumn = ({ text1, text2, p, r }) => {
  return (
    <Col style={r ? { textAlign: 'right' } : { textAlign: 'left' }}>
      <Text h6={!p} p={p} style={{ margin: 0, color: '#ccc' }}>
        {text1}
      </Text>
      <Text h6={!p} p={p} style={{ margin: 0, color: '#ccc' }}>
        {text2}
      </Text>
    </Col>
  );
};

export default SmallColumn;
