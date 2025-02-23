import { getMaxTemp, getMinTemp } from "../utils/forecastMisc";
import { formatForecastDay, weatherIcon } from "../utils/services";

function Forecast( { forecastData })
{   
    const forecastDetails = [
        {
            id: 1, 
            day: formatForecastDay(forecastData.city?.timezone, forecastData.list?.[8]?.dt).slice(0, 3),
            icon: forecastData.list?.[8]?.weather?.[0]?.icon,
            min_temp: getMinTemp(8, 16, forecastData.list),
            max_temp: getMaxTemp(8, 16, forecastData.list)
        },
        {
            id: 2,
            day: formatForecastDay(forecastData.city?.timezone, forecastData.list?.[16]?.dt).slice(0, 3),
            icon: forecastData.list?.[16]?.weather?.[0]?.icon,
            min_temp: getMinTemp(16, 24, forecastData.list),
            max_temp: getMaxTemp(16, 24, forecastData.list),
        },
        {
            id: 3,
            day: formatForecastDay(forecastData.city?.timezone, forecastData.list?.[24]?.dt).slice(0, 3),
            icon: forecastData.list?.[24]?.weather?.[0]?.icon,
            min_temp: getMinTemp(24, 32, forecastData.list),
            max_temp: getMaxTemp(24, 32, forecastData.list),
        },
        {
            id: 4,
            day: formatForecastDay(forecastData.city?.timezone, forecastData.list?.[32]?.dt).slice(0, 3),
            icon: forecastData.list?.[32]?.weather?.[0]?.icon,
            min_temp: getMinTemp(32, 39, forecastData.list),
            max_temp: getMaxTemp(32, 39, forecastData.list),
        },
        {
            id: 5,
            day: formatForecastDay(forecastData.city?.timezone, forecastData.list?.[39]?.dt).slice(0, 3),
            icon: forecastData.list?.[39]?.weather?.[0]?.icon,
            min_temp: getMinTemp(36, 39, forecastData.list),
            max_temp: getMaxTemp(36, 39, forecastData.list),
        }
    ];
    
    return (
        <>
            <div className="flex items-centre justify-start ml-25 mt-10">
                <h3 className="text-lg uppercase font-bold">24-hour Forecast</h3>
            </div>
            <div className="flex items-centre justify-between mx-25 mt-5 p-4">
                {
                    forecastDetails.map(({ id, day, icon, min_temp, max_temp }) => (
                        <div key={id} className="flex flex-col items-center justify-center">
                            <p>{day}</p>
                            <img src={weatherIcon(icon)}alt="weather_icon" className="size-20" />
                            <p>{Math.ceil(max_temp)}°C/{Math.floor(min_temp)}°C</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Forecast


