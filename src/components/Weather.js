import React from "react";
import { useEffect, useState } from "react";


const Weather = ()=> {
    let weatherData;
    const [send, setSend] = useState(false)
    const [ city, setCity ] = useState('pune');
    console.log(city);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '72d6b0dc78msh26104a9ffc13aa4p1717f2jsn0d623ba77f5f',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    useEffect(( ) => {
        console.log(city);
           const getWeather = ()=>{
            fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                weatherData = response;
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
      
         <h2 className="text-center text-4xl">Weather Componet</h2>
        </>
       
    )
}

export default Weather;