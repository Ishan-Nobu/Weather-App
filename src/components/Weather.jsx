import Forecast from "./Forecast"
import Search from "./Search"
import TemperatureDetails from "./TemperatureDetails"
import TimeAndPlace from "./TimeAndPlace"
import { getWeatherData } from "../utils/services";
import { useState, useEffect } from "react";
import  loading  from "../public/loading.gif"
import { bgImg } from "../utils/bgs";

function Weather()
{   
    const [searchValue, setSearchValue] = useState("");
    const [weatherData, setWeatherData] = useState({ data: {}, loading: true});
    const [forecastData, setForecastData] = useState({ data: {}, loading: true});

    // Initial API Call
    useEffect(() => {
            getWeatherData('weather', {q: "paris", units: 'metric'}).then(result => setWeatherData({data: result.data, loading: false}));
            getWeatherData('forecast', {q: "paris", units: 'metric'}).then(result => setForecastData({data: result.data, loading: false}));
    }, []);

    // Calling API based on Search Value
    const search = (e) => {

        if(e.type === "click" || e.keyCode === 13)
        {   
            if(searchValue)
            {
                getWeatherData('weather', {q: searchValue, units: 'metric'}).then(result => setWeatherData({data: result.data, loading: false}));
                getWeatherData('forecast', {q: searchValue, units: 'metric'}).then(result => setForecastData({data: result.data, loading: false}));
            }
        };
    };

    return (
        <>
            <div className="min-h-screen m-0 pt-10 bg-no-repeat bg-cover bg-fixed bg-center" 
                style={{backgroundImage: `url(${bgImg(weatherData.data.weather?.[0]?.icon)})`}}>
                <div className="max-w-screen-lg m-auto p-5 rounded-md bg-linear-to-b from-cyan-100/85 to-cyan-400/85 shadow-xl shadow-gray-400"> 
                    <div>
                        <Search search={search} searchValue={searchValue} setSearchValue={setSearchValue}/>
                        {
                            weatherData.loading &&
                            (
                                <img src={loading} alt="" className="ml-90 mt-30 size-70"/>
                            )
                        }
                        {
                            weatherData.loading ||
                            (       
                                <>
                                <TimeAndPlace weatherData={weatherData.data}/>
                                <TemperatureDetails weatherData={weatherData.data} forecastData={forecastData.data}/>
                                <Forecast forecastData={forecastData.data}/>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather