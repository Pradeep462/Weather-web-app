import React from 'react';
import './App.css';
import CityInput from './components/CityInput/index'
import CityWeather from './components/CityWeather/index'

function App() {

     
  const [city , setCity] = React.useState("");
  const [cityWeather , setCityWeather] = React.useState({});

  const fetchCityWeather = () =>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a68129f8765f3665c9b7a9e4ce25cc51`
      )
      .then((response)=> response.json())
      .then((result) => {
        setCityWeather(result);
      })
      .catch((error)=>{
        console.log("error is",error);
      })
  };

 // console.log(cityWeather.main.temp);
  return (
    <div className="container bg-dark text-center text-uppercase font-weight-bold rounded" style={{fontSize:"25px", color:"white"}}>
    <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
    <CityWeather cityWeather={cityWeather}/>
    </div>
  );
}

export default App;
