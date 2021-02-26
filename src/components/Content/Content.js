import { Col, Row, Spacer, useMediaQuery, useToasts } from '@geist-ui/react';
import React, { useEffect, useState } from 'react';
import API from '../../config';
import SearchBar from '../SearchBar/SearchBar';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const Content = () => {
  const [weather, setWeather] = useState({});
  const isSM = useMediaQuery('sm', { match: 'down' });
  const [, setToast] = useToasts();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `${API.base}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API.key}`,
        )
          .then((res) => res.json())
          .then((r) => {
            setWeather(r);
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
