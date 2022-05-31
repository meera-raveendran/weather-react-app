// import React, { useState } from "react";
// import axios from "axios";
// import Weatherdata from "./Weatherdata";


// export default function Search() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState("");
//   function upadateCity(event) {
//     event.preventDefault();
//     setCity(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     let apiKey = "a2e0cfbfe5d276ae777464db6e6424f7";
//     let unit = "metric";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
//     axios.get(apiUrl).then(showWeather);
//   }
//   function showWeather(response) {
//     const temperature = Math.round(response.data.main.temp);
//     const description = response.data.weather[0].description;
//     const humidity = response.data.main.humidity;
//     const wind = Math.round(response.data.wind.speed);
//     const icon = response.data.weather[0].icon;
//     const IconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
//     setWeather(
//       <Weatherdata
//         city={city}
//         temperature={temperature}
//         humidity={humidity}
//         description={description}
//         wind={wind}
//         icon={IconUrl}
//       />
//     );
//   }

//   return (
//     <div className="Search">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="search"
//           placeholder="Enter a City.."
//           onChange={upadateCity}
//         />
//         <input type="submit" value="search" />
//       </form>
//       {weather}
//     </div>
//   );
// }
