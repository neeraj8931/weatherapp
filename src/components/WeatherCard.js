
// write a new componet to pass forecast and show the 24 hours data

import HourlyStatus from "./HourlyStatus";

const WeatherCard = (props)=>{
    // console.log(props);
    const {current,forecast,location } = {...props.weather};

    return(
        <>
         <div className="text-center md:w-1/2">
         <div className="card-header">
            <div className="city-name">
                <h2 className="text-3xl text-bold">{location.name} <span className="">, {location.country}</span></h2> 
            </div>
            <div className="current-materics-today">
            <p className="text-5xl py-5">Today</p>
            <p className="text-xl">{current.last_updated}</p>
            <p className="text-7xl my-5">{current.temp_c} °C</p>
           
            </div>
            <HourlyStatus hours={forecast.forecastday[0]}/>
         </div>   
         </div>
         <div className="card-footer bg-white rounded-t-3xl md:rounded-3xl md:m-4 text-black md:w-1/2">
                <div className="current-condition flex justify-between flex-wrap">
                  <div className="w-1/2 p-4 mt-2">
                    <p className="text-xl">WIND-SPEED</p>
                       <p className="text-4xl py-5"> {current.wind_kph}</p>
                  </div>
                  <div className="w-1/2 p-4 mt-2">
                    <p className="text-xl">HUMIDITY</p>
                       <p className="text-4xl py-5"> {current.humidity}</p>
                  </div>
                  <div className="w-1/2 p-4 mt-2">
                    <p className="text-xl">WIND-DIRECTION</p>
                       <p className="text-4xl py-5"> {current.wind_dir}</p>
                  </div>
                  <div className="w-1/2 p-4 mt-2">
                    <p className="text-xl">PRESSURE</p>
                       <p className="text-4xl py-5"> {current.pressure_in}</p>
                  </div>
                   
                </div>
         </div> 
        </>
    )
};

export default WeatherCard;