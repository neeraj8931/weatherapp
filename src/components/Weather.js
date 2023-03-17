import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import weather from "../../helpers/data";
import SearchIcon from '@mui/icons-material/Search';
require('dotenv').config()


const Weather = ()=> {
    const [weatherData, setWeatherData] = useState(weather);
       
    const [send, setSend] = useState(false)
    const [ city, setCity ] = useState('pune');
    console.log(city);
    console.log(process.env.RAPIDAPI_KEY);

   
  // fetching live weather
    useEffect(( ) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
           const getWeather = ()=>{
            fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`, options)
            .then(response => response.json())
            .then(response => {
                setWeatherData(response);
                console.log(response)
            }).catch(err => console.error(err));
           }
           getWeather();
    },[send])

   const handleChange = (e) =>{
    e.preventDefault();
    setCity(e.target.value)
   }

   const handleSearch = ()=>{
    console.log("cliecked");
    setSend(!send);
   }

   console.log(weatherData)
   
 
    return(
        <>
        <div className="bg-blue-300">
       <div className="flex w-4/5 mx-auto border-b-2 text-center">
       <input className="bg-transparent  p-5 text-white w-4/5" type='search' placeholder="cityname" onChange={handleChange} value={city} /> 
        <span className="mx-2  text-white font-bold p-5 rounded group" onClick={handleSearch}> 
        <SearchIcon />
        </span> 
       </div>
        <WeatherCard weather={weatherData}/>
        </div>
        </>
       
    )
}

export default Weather;