

const HourlyStatus = (props) =>{
    const hours= props.hours.hour;

    console.log(hours);
    const hoursReport =hours.map((hour,index)=>{
        return  (
            <>
            <div className="flex flex-col ">
            <p>{index<12? `${index} am`: `${index-12} pm`}</p>
            <div className="p-3 border-blue-400 border-2 m-2 rounded-md w-24">
              <img  className="" src={hour.condition.icon} alt={hour.condition.text} />
                <p>{hour.temp_c}  °C</p>
            </div>
            </div>
            </>
        )
     });

    return(
        <>
        <div className="flex w-full overflow-x-auto block">
            {hoursReport}
        </div>
        
        </>
    )
}

export default HourlyStatus;