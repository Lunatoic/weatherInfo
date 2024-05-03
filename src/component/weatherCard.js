import React from 'react'

const weatherCard = () => {
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25.5&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">Mohali, India</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleDateString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className='wi wi-sunset'></i>
              </p>
              <p className='extra-info-leftside'> 19:19 <br /> sunset </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className='wi wi-humidity'></i>
              </p>
              <p className='extra-info-leftside'> 19:19 <br /> humidity </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className='wi wi-humidity'></i>
              </p>
              <p className='extra-info-leftside'> 19:19 <br /> Pressure </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className='wi wi-humidity'></i>
              </p>
              <p className='extra-info-leftside'> 19:19 <br /> Speed </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default weatherCard
