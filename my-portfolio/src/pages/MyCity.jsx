import { useState, useEffect } from 'react';

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
 
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=48.023&longitude=37.8022&hourly=temperature_2m,rain,showers,snowfall,snow_depth,precipitation,precipitation_probability,apparent_temperature,dew_point_2m,relative_humidity_2m&timezone=Europe%2FMoscow';
    

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
 
        setWeather(data);
      })
      .catch(error => console.error('Error fetching weather data:', error)); 
  }, []);

  if (!weather) {
    return <p>Завантаження...</p>; 
  }

 
  const { hourly } = weather;
  const temperature = hourly.temperature_2m ? hourly.temperature_2m[0] : 'N/A';  
  const precipitation = hourly.precipitation ? hourly.precipitation[0] : 'N/A'; 

  return (
    <div>
      <h1>Погода в моєму місті: Донецьк</h1>
      <div>
        <p>Температура: {temperature}°C</p>
        <p>Опади: {precipitation} мм</p>
      </div>
    </div>
  );
}

export default MyCity;
