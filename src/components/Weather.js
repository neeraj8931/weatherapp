import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";


const Weather = ()=> {
    const [weatherData, setWeatherData] = useState({
        "location": {
            "name": "Pune",
            "region": "Maharashtra",
            "country": "India",
            "lat": 18.53,
            "lon": 73.87,
            "tz_id": "Asia/Kolkata",
            "localtime_epoch": 1678631594,
            "localtime": "2023-03-12 20:03"
        },
        "current": {
            "last_updated_epoch": 1678631400,
            "last_updated": "2023-03-12 20:00",
            "temp_c": 29.4,
            "temp_f": 84.9,
            "is_day": 0,
            "condition": {
                "text": "Clear",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                "code": 1000
            },
            "wind_mph": 2.2,
            "wind_kph": 3.6,
            "wind_degree": 153,
            "wind_dir": "SSE",
            "pressure_mb": 1012,
            "pressure_in": 29.88,
            "precip_mm": 0,
            "precip_in": 0,
            "humidity": 23,
            "cloud": 5,
            "feelslike_c": 27.5,
            "feelslike_f": 81.5,
            "vis_km": 10,
            "vis_miles": 6,
            "uv": 1,
            "gust_mph": 2.2,
            "gust_kph": 3.6
        }

    });
       
    const [send, setSend] = useState(false)
    const [ city, setCity ] = useState('pune');
    console.log(city);

   
  // fetching live weather
    useEffect(( ) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '72d6b0dc78msh26104a9ffc13aa4p1717f2jsn0d623ba77f5f',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
           const getWeather = ()=>{
            fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
            .then(response => response.json())
            .then(response => {
                setWeatherData(response);
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
 
    return(
        <>
        <div className="my-8 flex justify-center">
        <input className="border-spacing-3 border-red-300 border-2 w-3/5 p-5" type='search' placeholder="cityname" onChange={handleChange} value={city}/>
        <button className="mx-2 bg-black text-white font-bold p-5 rounded" onClick={handleSearch}> Search </button> 
        </div>
        <WeatherCard weather={weatherData}/>
        </>
       
    )
}

export default Weather;