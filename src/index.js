import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import Search from "./Search";
import "./Styles.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
    <div className="Container"> 
        <Weather defaultCity="Paris"/>
        {/* <Search /> */}
        <footer>
          This project was coded by Meera Raveendran and is 
         <a  href="https://github.com/meera-raveendran/weather-react-app" target="_blank"> open-sourced </a> on GitHub
        </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
