
// import { useEffect, useState } from "react";

// function WeatherApp() {
//     const [weather, setWeather] = useState(null);

//     useEffect(() => {
//         const lat = 40.7128;
//         const lon = -74.0060;
//         const apiKey = "f7330e46d706ed98ac3591070422173a";

//         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
//             .then(res => res.json())
//             .then(data => setWeather(data));
//     }, []);

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Weather Data</h2>
//             {weather ? (
//                 <>
//                     <p><strong>Location:</strong> {weather.name}</p>
//                     <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
//                     <p><strong>Weather:</strong> {weather.weather[0].description}</p>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

// export default WeatherApp;






//--------------------Practice------------------------------

// import { useState } from "react";

// function WeatherApp() {
//   const [city, setCity] = useState("");
//   const [data, setData] = useState(null);

//   const key = "f7330e46d706ed98ac3591070422173a";

//   const getWeather = () => {
//     if (!city) return;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
//       .then(res => res.json())
//       .then((data) => console.log(data));
//   };

//   return (
//     <>
//       <h3>Weather App</h3>
//       <input placeholder="City name..." onChange={e => setCity(e.target.value)} />
//       <button onClick={getWeather}>Search</button>

//       {data && data.main  &&(
//         <div>
//           <h4>{data.name}</h4>
//           <p>Temp: {data.main.temp}°C</p>
//           <p>{data.weather[0].description}</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default WeatherApp;










//---------------------Practicing-----------------------------

// import { useState } from "react";

// function WeatherApp() {
//     const [city, setCity] = useState("");
//     const[data, setData] = useState(null);

//     const key = "f7330e46d706ed98ac3591070422173a";

// function handleClick() {

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
//     .then((res) => res.json())
//     .then((datas) => setData(datas));

// }

//     return (
//         <center style={{border: "1px solid black", height: "355px" ,width: "400px", margin: "0 auto"}}>
//         <h2 style={{backgroundColor:"lightblue"}}>Weather APP</h2>
//   Enter City: <input type="text" onChange={(e) => setCity(e.target.value)}/>
//   <button onClick={handleClick}>Search</button>

// {data && data.main && (
//     <center style={{border: "1ps solid black"}}>
//         <hr></hr>
//         <p>City: {data.name}</p>
//         <hr />
//         <p>Temperature: {data.main.temp} ^o Celcius</p>
//         <hr />
//         <p>Humidity: {data.main.humidity} %</p>
//         <hr />
//         <p>Weather: {data.weather[0].main}</p>
//         <hr />
//         <p>Wind: {data.wind.speed}</p>
//         <hr />
//     </center>

// )}
  
//         </center>
//     )
// }
// export default WeatherApp;







