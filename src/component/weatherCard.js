import React, { useEffect, useState } from 'react'


const WeatherCard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = useState("");
    const {
        temp,
        pressure,
        humidity,
        weatherMood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(()=>{
        if(weatherMood){
            switch(weatherMood){
                case "Clouds" : setWeatherState("wi-day-cloudy")
                break;
                case "Haze" : setWeatherState("wi-fog")
                break;
                case "Clear" : setWeatherState("wi-day-sunny")
                break;
                case "Dust" : setWeatherState("wi-dust")
                break;
                case "Rain" : setWeatherState("wi-rain")
                break;

                default: setWeatherState("wi-day-sunny")
                break;
            }
        }
    },[weatherMood])


    let sec = sunset;
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()} : ${date.getMinutes()}`

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleDateString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className='wi wi-sunset'></i>
              </p>
              <p className='extra-info-leftside'> {timeStr} <br /> sunset </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className='wi wi-humidity'></i>
              </p>
              <p className='extra-info-leftside'> {humidity} <br /> humidity </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className='wi wi-humidity'></i>
              </p>
              <p className='extra-info-leftside'> {pressure} <br /> Pressure </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className='wi wi-humidity'></i>
              </p>
              <p className='extra-info-leftside'> {speed} <br /> Speed </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard
