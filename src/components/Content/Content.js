import { Col, Row, Spacer, useMediaQuery, useToasts } from '@geist-ui/react';
import React, { useEffect, useState } from 'react';
import API from '../../config';
import { checkCookie, setCookie } from '../../features/cookies';
import SearchBar from '../SearchBar/SearchBar';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const Content = () => {
  const [weather, setWeather] = useState({});
  const isSM = useMediaQuery('sm', { match: 'down' });
  const [, setToast] = useToasts();

  useEffect(() => {
    const agreement = checkCookie('agreement');
    if (!agreement) {
      setToast({
        text: 'This site uses cookie, do you agree to them?',
        type: 'warning',
        delay: 50000,
        actions: [
          {
            name: 'Agree',
            handler: (event, cancel) => {
              setCookie('agreement', true);
              cancel();
            },
          },
        ],
      });
    }
    const cookie = checkCookie();
    if (cookie) {
      setWeather(JSON.parse(cookie));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetch(
            `${API.base}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API.key}`,
          )
            .then((res) => res.json())
            .then((r) => {
              setWeather(r);
              setCookie('local_weather', r);
            });
        },
        (errorObj) => {
          setToast({
            text: errorObj.message,
            type: 'error',
            delay: 3000,
          });
        },
        { enableHighAccuracy: true, maximumAge: 10000 },
      );
    }
  }, []);

  return (
    <>
      <Row>
        {!isSM && <Col span={4} />}
        <Col>
          <SearchBar setWeather={setWeather} />
        </Col>
        {!isSM && <Col span={4} />}
      </Row>
      <Spacer y={1} />
      <Row>
        {!isSM && <Col span={4} />}
        <Col>
          <WeatherInfo weather={weather} />
        </Col>
        {!isSM && <Col span={4} />}
      </Row>
    </>
  );
};

export default Content;
