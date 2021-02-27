import { Col, Row, Text } from '@geist-ui/react';
import { Activity } from '@geist-ui/react-icons';
import React from 'react';

const Footer = () => {
  return (
    <Row gap={2} justify="space-between" style={{ paddingBottom: 10 }}>
      <Col>
        <Text p style={{ margin: 0 }}>
          {new Date().getFullYear()}
        </Text>
      </Col>
      <Col style={{ textAlign: 'right' }}>
        <Text p style={{ margin: 0 }}>
          Ralabs{' '}
          <span>
            <Activity size={16} />
          </span>{' '}
          Karrtopelka
        </Text>
      </Col>
    </Row>
  );
};

export default Footer;
