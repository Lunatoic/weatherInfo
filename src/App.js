import React, { useEffect, useState } from 'react'
import WeatherCard from './component/weatherCard';
import "./App.css";


const App = () => {

  const [searchValue, setSearchValue] = useState("mohali");

  const [tempInfo, setTempInfo] = useState({});
  
  const getWeatherInfo = async() =>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d3a6235ee9b08d554eb68e51a0b252c4`
//https://api.openweathermap.org/data/2.5/weather?q=mohali&appid=d3a6235ee9b08d554eb68e51a0b252c4
      let res = await fetch(url);
      let data = await res.json();

      const {temp, pressure, humidity} = data.main;
      const {main: weatherMood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country, sunset} = data.sys;

      const myNewWeatherInfo = {
        temp,
        pressure,
        humidity,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);

      // console.log(tempInfo);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    getWeatherInfo();
  }, [])

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search" placeholder='search...' autoFocus id='search' className="searchTerm" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button className="searchButton" type='button' onClick={getWeatherInfo}>
            search
          </button>
        </div>
      </div>

      <WeatherCard tempInfo={tempInfo} />
    </>
  )
}

export default App
