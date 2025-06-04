import { FaThermometerFull } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { weatherIcon } from "../utils/services";
import { getMaxTemp, getMinTemp } from "../utils/forecastMisc";

function TemperatureDetails( { weatherData, forecastData })
{   

    const weatherDetails = [
        {
            id: 1,
            Icon: FaThermometerFull,
            title: "RealFeel",
            value: `${Math.round(weatherData.main?.feels_like)}°C`
        },
        {
            id: 2,
            Icon: FaDroplet,
            title: "Humidity",
            value: `${weatherData.main?.humidity}%`
        },
        {
            id: 3,
            Icon: FaWind,
            title: "WindSpeed",
            value: `${weatherData.wind?.speed} km/h`
        },
    ];

    return (
        <div className="flex flex-row items-center justify-center md:gap-35 gap-20">
            <div>
                <img src={weatherIcon(weatherData.weather?.[0]?.icon)} alt="weather_icon" className="size-30" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 md:ml-5">
                <p className="text-5xl font-medium pb-2">
                    {Math.round(weatherData.main?.temp)}°C
                </p>
                <div className="flex flex-row text-md font-medium items-center justify-center gap-5">
                    <span className="capitalize">{weatherData.weather?.[0]?.description}</span>
                    <span>{Math.ceil(getMaxTemp(0, 8, forecastData.list))}°C/{Math.floor(getMinTemp(0, 8, forecastData.list))}°C</span>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-0.5">
                {
                    weatherDetails.map(({ id, Icon, title, value }) => (
                        <div key={id} className="flex md:text-sm text-xs font-light items-center justify-centre gap-2">
                            <Icon className="size-5 mr-1"/> 
                            {`${title}: `}
                            <span className="ml-1">{`${value}`}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TemperatureDetails