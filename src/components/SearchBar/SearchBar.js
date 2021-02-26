import { Card, Container, Grid, Input, Text, Tooltip } from '@geist-ui/react';
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
      <Grid.Container gap={1} justify="space-around">
        <Grid>
          <Text h3 style={{ margin: 0 }}>
            Search location
          </Text>
        </Grid>
        <Grid>
          <Tooltip text={`Then hit Enter`} trigger="click" type="dark">
            <Input
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </Tooltip>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

export default SearchBar;
