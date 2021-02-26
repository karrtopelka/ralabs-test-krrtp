import { Col, Container, Grid, Input, Row } from '@geist-ui/react';
import React, { useEffect, useState } from 'react';
import API from '../../config';
import SearchBar from '../SearchBar/SearchBar';

const Content = () => {
  const [weather, setWeather] = useState({});

  const datebuilder = (d) => {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];
    return `${day},  ${String(d).slice(3, 15)}`;
  };

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
        alert(errorObj.code + ': ' + errorObj.message);
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
      <Row>
        <Col span={4} />
        <Col>
          {typeof weather.main != 'undefined' ? (
            <div>
              <div>
                <div className="location-box">
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>
                  <div className="date">{datebuilder(new Date())}</div>
                </div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            <>
              <h1>Nothing found</h1>
            </>
          )}
        </Col>
        <Col span={4} />
      </Row>
    </>
  );
};

export default Content;
