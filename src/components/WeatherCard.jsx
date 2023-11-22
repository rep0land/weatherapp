import React, { useState } from 'react'
import './styles/WatherCard.css'

const WeatherCard = ({ weather, temp }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleChangeTemp = () => setIsCelsius(!isCelsius)


  return (

    <article className='weather'>
      <h1 className='weather__title'>WeatherCard</h1>
      <h2 className='weather__location'>{weather?.name}, {weather?.sys.country}</h2>
      <section className='weather__body'>
        <header className='weather__img-container'>
          <img className='weather__img' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
        </header>
        <article className='weather__info'>
          <h3 className='weather__condition'>"{weather?.weather[0].description}"</h3>
          <ul className='weather__list'>
            <li><span className='weather__item'>Wind Speed</span><span className='weather__label'>{weather?.wind.speed}m/s</span></li>
            <li><span className='weather__item'>Clouds</span><span className='weather__label'>{weather?.clouds.all}%</span></li>
            <li><span className='weather__item'>Pressure</span><span className='weather__label'>{weather?.main.pressure}hPa</span></li>
          </ul>
        </article>
      </section>

      <h2 className='weather__temp'>{isCelsius ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F`}</h2>
      <button className='weather__btn' onClick={handleChangeTemp}>Change to {isCelsius ? '°F' : '°C'}</button>
    </article>

  )
}

export default WeatherCard
