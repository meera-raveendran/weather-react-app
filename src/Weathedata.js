import React from "react";
import "./Weatherdata.css";
export default function Weatherdata(props) {
  if (props.city) {
    return (
      <div className="Weatherdata">
        <ul className="WeatherDesc">
          <li>Temperature:{props.temperature}°C</li>
          <li>Description:{props.description}</li>
          <li>Humidity:{props.humidity}%</li>
          <li>Wind:{props.wind}m/h</li>
          <li>
            <img src={props.icon} alt={props.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

