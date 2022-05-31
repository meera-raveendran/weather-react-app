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
        <h1>WEATHER APP</h1>
        <Weather/>
        {/* <Search /> */}
        <footer>
          This project was coded by
          <a href="" target="_blank"> Meera Raveendran
        </a> and is 
         <a  href="" target="_blank"> open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
