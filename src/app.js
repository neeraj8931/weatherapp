import React from "react";
import ReactDOM  from "react-dom/client";

const App = () =>{
    return(
        <h1 className="text-center text-7xl">Weather App</h1> 
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);