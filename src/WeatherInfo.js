import React from "react";
import FormattedDate  from "./FormattedDate";
export default function WeatherInfo(props){
    return(
        <div className=" WeatherData">
            <h1>{props.data.city}</h1>
            <ul>
                <li><FormattedDate date={props.data.date}/></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                  <div className="clearfix">
                    <img src={props.data.IconUrl} alt={props.data.description} className="float-left" />
                  {/* <div className="float-left"> */}
                    <span className="temperature"> {props.data.temperature}</span>
                    <span className="unit">°C</span>
                  {/* </div> */}
                  </div>                    
                </div>
                    
                <div className="col-6">
                    <ul>
                        
                        <li>Humidity:{props.data.humidity}%</li>
                        <li>Wind Speed:{props.data.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )

          
}