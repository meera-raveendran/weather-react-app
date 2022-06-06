import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props){
    const[weatherData,setWeatherData]=useState({ready:false})    
    function showWeather(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
           temperature: Math.round(response.data.main.temp),
           humidity: Math.round(response.data.main.humidity),
           description : response.data.weather[0].description,
           wind : Math.round(response.data.wind.speed),
           city:response.data.name,      
           date:"Wednesday 07:00",     
           IconUrl : "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        })
       
    }
   
    if(weatherData.ready){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a City..." className="form-control"/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="search" className="btn btn-primary" w-150/>
                    </div>
                </div>
                
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                  <div className="clearfix">
                    <img src={weatherData.IconUrl} alt={weatherData.description} className="float-left" />
                  {/* <div className="float-left"> */}
                    <span className="temperature"> {weatherData.temperature}</span>
                    <span className="unit">°C</span>
                  {/* </div> */}
                  </div>                    
                </div>
                    
                <div className="col-6">
                    <ul>
                        
                        <li>Humidity:{weatherData.humidity}%</li>
                        <li>Wind Speed:{weatherData.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
else {
    const apiKey = "a2e0cfbfe5d276ae777464db6e6424f7";
    const unit = "metric";    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
}
}