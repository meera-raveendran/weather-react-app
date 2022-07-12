import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"
import axios from "axios";
export default function WeatherForecast(props){
    let[loaded,setLoaded]=useState(false);
    let[forecast,setForecast]=useState(null);
    function handleResponse(response){
        console.log(response.data)
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if(loaded){
        return(
        <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast,index){
                if (index<6){
                    return(
                        <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast}/>
        
                    </div>
                        );
                }
              

            })}
            
        </div>

    </div>
        )   
    }
    else{
        
            const apiKey="a2e0cfbfe5d276ae777464db6e6424f7";
    const latitude=props.coordinates.lat;
    const longitude=props.coordinates.lon;
    const apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
    return null;
           
        
    }
    
    
}