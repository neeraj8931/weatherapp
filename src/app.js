import React from "react";
import ReactDOM  from "react-dom/client";
import Weather from "./components/Weather";

const App = () =>{
    return(
        <>
        <h1 className="text-center text-7xl">Weather App Setup</h1> 
        <Weather/>
        </>
       
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);