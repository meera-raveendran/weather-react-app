import React,{useState} from "react";
export default function WeatherTemperature(props){
    const[unit,setUnit]=useState("celsius")
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("Fahrenheit")
    }
    function fahrenheit(){
         return((props.celsius*9)/5+32);

    }
    if(unit==="celsius"){
    return(
        
    <div className="WeatherTemperature">
        <span className="temperature"> {props.celsius}</span>
        <span className="unit">°C|<button onClick={showFahrenheit}>°F</button></span>
    </div>
    );
    }else{
        
        return(
                    
            <div className="WeatherTemperature">
                <span className="temperature"> {Math.round(fahrenheit())}</span>
                <span className="unit"><button onClick={showCelsius}>°C</button>|°F</span>
            </div>
            );
    }
    
}