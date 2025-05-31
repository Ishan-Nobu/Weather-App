export const bgImg = (icon) => {

    let bgPath = "";

    switch (icon) 
    {
        case "01d":       // clear sky day
            bgPath = "src/public/weatherImages/clearsky.jpg";
            break;

        case "01n":      //clear sky night
            bgPath = "src/public/weatherImages/clearskynight.jpg";
            break;

        case "02d":     // few clouds day
            bgPath = "src/public/weatherImages/fewclouds.jpg";
            break;

        case "02n":     // few clouds night
            bgPath = "src/public/weatherImages/fewcloudsnight.jpg";
            break;

        case "03d":     // scattered clouds  // white clouds
            bgPath = "src/public/weatherImages/scatteredclouds.jpg";
            break;

        case "03n":     // scattered clouds  // white clouds
            bgPath = "src/public/weatherImages/scatteredclouds.jpg";
            break;

        case "04d":     // broken clouds   // black clouds
            bgPath = "src/public/weatherImages/brokenclouds.jpg";
            break;
        
        case "04n":     // broken clouds  //black clouds
            bgPath = "src/public/weatherImages/brokenclouds.jpg";
            break;

        case "09d":     // rain
            bgPath = "src/public/weatherImages/rain.jpg"; 
            break;

        case "09n":     // rain
            bgPath = "src/public/weatherImages/rain.jpg"; 
            break;

        case "10d":     // rain
            bgPath = "src/public/weatherImages/rain.jpg";
            break;

        case "10n":     // rain
            bgPath = "src/public/weatherImages/rain.jpg";
            break;

        case "11d":     // thunderstorm
            bgPath = "src/public/weatherImages/thunderstorm.jpg";
            break;

        case "11n":     // thunderstorm
            bgPath = "src/public/weatherImages/thunderstorm.jpg";
            break;

        case "13d":      // snow
            bgPath = "src/public/weatherImages/snow.jpg";
            break;

        case "13n":      // snow
            bgPath = "src/public/weatherImages/snow.jpg";
            break;
        
        case "50d":      // mist & haze
            bgPath = "src/public/weatherImages/mist.jpg";
            break;

        case "50n":      // mist & haze
            bgPath = "src/public/weatherImages/mist.jpg";
            break;

        default:
            bgPath = "";
            break;
    }
    return bgPath;
};
