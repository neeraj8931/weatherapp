


const WeatherCard = (props)=>{
    // console.log(props);
    const {current,location } ={...props.weather};

    return(
        <>
         <div className="w-fit md:w-2/5 bg-black text-white p-10 mx-auto rounded-3xl">
         <div className="card-header flex justify-around">
            <div className="city-name">
                <h2 className="text-4xl text-bold">{location.name}</h2>
                <span className="text-center my-6">{location.region} / {location.country}</span>
            </div>
            <div className="current-materics text-center ml-9">
            <img src={current.condition.icon} alt={current.condition.text} />
            <p>{current.condition.text}</p>
            <p>{current.temp_c} °C</p>
            </div>
         </div>    
         </div>
        </>
    )
};

export default WeatherCard;