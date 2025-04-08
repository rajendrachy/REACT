// import React, { useState } from 'react';

// const WeatherApp = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const API_KEY = 'your_api_key_here'; // Replace with your API key

//   const getWeather = () => {
//     if (!city) return;

//     fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('City not found');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setWeather(data);
//         setError('');
//       })
//       .catch(() => {
//         setWeather(null);
//         setError('City not found. Please try again.');
//       });
//   };

//   return (
//     <div>
//       <h2>Weather App</h2>
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={getWeather}>Get Weather</button>

//       {error && <p>{error}</p>}

//       {weather && (
//         <div>
//           <h3>{weather.location.name}</h3>
//           <p>Temperature: {weather.current.temp_c}°C</p>
//           <p>Condition: {weather.current.condition.text}</p>
//           <img src={weather.current.condition.icon} alt="weather icon" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
