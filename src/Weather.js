import React,{useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
export default function Weather(props){
    const[city,setCity]=useState(props.defaultCity)
    const[weatherData,setWeatherData]=useState({ready:false})    
    function showWeather(response){
        console.log(response.data);
        let d = new Date()
        let localTime = d.getTime()
        let localOffset = d.getTimezoneOffset() * 60000
        let datetime = localTime + localOffset + (1000 * response.data.timezone)
        setWeatherData({
            ready:true,
            coordinates:response.data.coord,
           temperature: Math.round(response.data.main.temp),
           humidity: Math.round(response.data.main.humidity),
           description : response.data.weather[0].description,
           wind : Math.round(response.data.wind.speed),
           city:response.data.name,      
           date:new Date (datetime),
           Icon : response.data.weather[0].icon
        })
       
    }
    function search(){
        const apiKey = "a2e0cfbfe5d276ae777464db6e6424f7";
    const unit = "metric";    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);

    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function changeCity(event){
        setCity(event.target.value);
    }
   
    if(weatherData.ready){
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a City..." className="form-control" onChange={changeCity}/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="search" className="btn btn-primary" w-150 />
                    </div>
                </div>
                
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
    )

}
else {
    search();
    return "Loading..."
}
}