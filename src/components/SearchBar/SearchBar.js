import { Card, Container, Input, Text, Tooltip } from '@geist-ui/react';
import React, { useState } from 'react';
import API from '../../config';

const SearchBar = ({ setWeather }) => {
  const [query, setQuery] = useState('');
  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${API.base}weather?q=${query}&units=metric&appid=${API.key}`)
        .then((res) => res.json())
        .then((r) => {
          setQuery('');
          setWeather(r);
        });
    }
  };

  return (
    <Card shadow>
      <Container justify="space-around">
        <Text h3 style={{ margin: 0 }}>
          Search location
        </Text>
        <Tooltip text={`Then hit Enter`} trigger="click" type="dark">
          <Input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </Tooltip>
      </Container>
    </Card>
  );
};

export default SearchBar;
