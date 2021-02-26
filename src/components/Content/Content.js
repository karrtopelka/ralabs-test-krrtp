import { Col, Row, Spacer } from '@geist-ui/react';
import React, { useEffect, useState } from 'react';
import API from '../../config';
import SearchBar from '../SearchBar/SearchBar';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const Content = () => {
  const [weather, setWeather] = useState({});

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
        alert(errorObj.message);
      },
      { enableHighAccuracy: true, maximumAge: 10000 },
    );
  }, []);

  return (
    <>
      <Row>
        <Col span={4} />
        <Col>
          <SearchBar setWeather={setWeather} />
        </Col>
        <Col span={4} />
      </Row>
      <Spacer y={2} />
      <Row>
        <Col span={4} />
        <Col>
          <WeatherInfo weather={weather} />
        </Col>
        <Col span={4} />
      </Row>
    </>
  );
};

export default Content;
