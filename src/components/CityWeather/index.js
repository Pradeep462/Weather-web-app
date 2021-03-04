import React from 'react';

const CityWeather = ({cityWeather}) => {
    const kelvinToCel = (temp) => {
        return (temp - 273.15).toFixed(2);
      };
    return (
        <div>
        <p>Temperature : {cityWeather.main!==undefined ? kelvinToCel(cityWeather.main.temp)+"°C":""}</p>
       <p>Humidity : {cityWeather.main!==undefined ? cityWeather.main.humidity+"%" : ""}</p>
       <p>Wind : {cityWeather.main!==undefined ? cityWeather.wind.speed +"km/h" : ""}</p>
        </div>
    );
};

export default CityWeather;