import {
  Card,
  Grid,
  Input,
  Keyboard,
  Text,
  Tooltip,
  useMediaQuery,
} from '@geist-ui/react';
import React, { useState } from 'react';
import API from '../../config';

const SearchBar = ({ setWeather }) => {
  const isXS = useMediaQuery('xs', { match: 'down' });
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
          <Tooltip
            text={
              <>
                Then hit {` `}
                <Keyboard>Enter</Keyboard>
              </>
            }
            trigger="click"
            type="dark"
            placement={isXS ? 'bottom' : 'top'}
          >
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
