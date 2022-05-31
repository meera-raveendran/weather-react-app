import React from "react";
import "./Weather.css";
export default function Weather(){
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
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                  <div className="clearfix">
                    <img src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" alt="Mostly Cloudy" className="float-left" />
                  {/* <div className="float-left"> */}
                    <span className="temperature"> 6</span>
                    <span className="unit">°C</span>
                  {/* </div> */}
                  </div>                    
                </div>
                    
                <div className="col-6">
                    <ul>
                        <li>Percipitation:20%</li>
                        <li>Humidity:50%</li>
                        <li>Wind Speed:10km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}