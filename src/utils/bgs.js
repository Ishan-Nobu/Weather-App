export const bgImg = (icon) => {

    let bgPath = "";

    switch (icon) 
    {
        case "01d":       // clear sky day
            bgPath = "src/public/clearsky.jpg";
            break;

        case "01n":      //clear sky night
            bgPath = "src/public/clearskynight.jpg";
            break;

        case "02d":     // few clouds day
            bgPath = "src/public/fewclouds.jpg";
            break;

        case "02n":     // few clouds night
            bgPath = "src/public/fewcloudsnight.jpg";
            break;

        case "03d":     // scattered clouds  // white clouds
            bgPath = "src/public/scatteredclouds.jpg";
            break;

        case "03n":     // scattered clouds  // white clouds
            bgPath = "src/public/scatteredclouds.jpg";
            break;

        case "04d":     // broken clouds   // black clouds
            bgPath = "src/public/brokenclouds.jpg";
            break;
        
        case "04n":     // broken clouds  //black clouds
            bgPath = "src/public/brokenclouds.jpg";
            break;

        case "09d":     // rain
            bgPath = "src/public/rain.jpg"; 
            break;

        case "09n":     // rain
            bgPath = "src/public/rain.jpg"; 
            break;

        case "10d":     // rain
            bgPath = "src/public/rain.jpg";
            break;

        case "10n":     // rain
            bgPath = "src/public/rain.jpg";
            break;

        case "11d":     // thunderstorm
            bgPath = "src/public/thunderstorm.jpg";
            break;

        case "11n":     // thunderstorm
            bgPath = "src/public/thunderstorm.jpg";
            break;

        case "13d":      // snow
            bgPath = "src/public/snow.jpg";
            break;

        case "13n":      // snow
            bgPath = "src/public/snow.jpg";
            break;
        
        case "50d":      // mist & haze
            bgPath = "src/public/mist.jpg";
            break;

        case "50n":      // mist & haze
            bgPath = "src/public/mist.jpg";
            break;

        default:
            bgPath = "";
            break;
    }
    return bgPath;
};
