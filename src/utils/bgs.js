export const bgImg = (icon) => {

    let bgPath = "";

    switch (icon) 
    {
        case "01d":       // clear sky day
            bgPath = "clearsky.jpg";
            break;

        case "01n":      //clear sky night
            bgPath = "clearskynight.jpg";
            break;

        case "02d":     // few clouds day
            bgPath = "fewclouds.jpg";
            break;

        case "02n":     // few clouds night
            bgPath = "fewcloudsnight.jpg";
            break;

        case "03d":     // scattered clouds  // white clouds
            bgPath = "scatteredclouds.jpg";
            break;

        case "03n":     // scattered clouds  // white clouds
            bgPath = "scatteredclouds.jpg";
            break;

        case "04d":     // broken clouds   // black clouds
            bgPath = "brokenclouds.jpg";
            break;
        
        case "04n":     // broken clouds  //black clouds
            bgPath = "brokenclouds.jpg";
            break;

        case "09d":     // rain
            bgPath = "rain.jpg"; 
            break;

        case "09n":     // rain
            bgPath = "rain.jpg"; 
            break;

        case "10d":     // rain
            bgPath = "rain.jpg";
            break;

        case "10n":     // rain
            bgPath = "rain.jpg";
            break;

        case "11d":     // thunderstorm
            bgPath = "thunderstorm.jpg";
            break;

        case "11n":     // thunderstorm
            bgPath = "thunderstorm.jpg";
            break;

        case "13d":      // snow
            bgPath = "snow.jpg";
            break;

        case "13n":      // snow
            bgPath = "snow.jpg";
            break;
        
        case "50d":      // mist & haze
            bgPath = "mist.jpg";
            break;

        case "50n":      // mist & haze
            bgPath = "mist.jpg";
            break;

        default:
            bgPath = "";
            break;
    }
    return bgPath;
};
