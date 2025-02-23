import { formatLocalTime } from "../utils/services"

function TimeAndPlace( { weatherData })
{
    return (
        <div className="flex flex-col items-center justify-center space-y-4 mb-5">
            <p className="text-xl font-light mb-5">
                {formatLocalTime(weatherData.dt, weatherData.timezone)}
            </p>
            <p className="text-3xl font-medium">
                {weatherData.name}, {weatherData.sys?.country}
            </p>
        </div>
    )
}

export default TimeAndPlace