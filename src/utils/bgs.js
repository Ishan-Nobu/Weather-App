export const bgImg = (icon) => {

    let bgPath = "";

    switch (icon) 
    {
        case "01d":       // clear sky day
            bgPath = "public/weatherImages/clearsky.jpg";
            break;

        case "01n":      //clear sky night
            bgPath = "public/weatherImages/clearskynight.jpg";
            break;

        case "02d":     // few clouds day
            bgPath = "public/weatherImages/fewclouds.jpg";
            break;

        case "02n":     // few clouds night
            bgPath = "public/weatherImages/fewcloudsnight.jpg";
            break;

        case "03d":     // scattered clouds  // white clouds
            bgPath = "public/weatherImages/scatteredclouds.jpg";
            break;

        case "03n":     // scattered clouds  // white clouds
            bgPath = "public/weatherImages/scatteredclouds.jpg";
            break;

        case "04d":     // broken clouds   // black clouds
            bgPath = "public/weatherImages/brokenclouds.jpg";
            break;
        
        case "04n":     // broken clouds  //black clouds
            bgPath = "public/weatherImages/brokenclouds.jpg";
            break;

        case "09d":     // rain
            bgPath = "public/weatherImages/rain.jpg"; 
            break;

        case "09n":     // rain
            bgPath = "public/weatherImages/rain.jpg"; 
            break;

        case "10d":     // rain
            bgPath = "public/weatherImages/rain.jpg";
            break;

        case "10n":     // rain
            bgPath = "public/weatherImages/rain.jpg";
            break;

        case "11d":     // thunderstorm
            bgPath = "public/weatherImages/thunderstorm.jpg";
            break;

        case "11n":     // thunderstorm
            bgPath = "public/weatherImages/thunderstorm.jpg";
            break;

        case "13d":      // snow
            bgPath = "public/weatherImages/snow.jpg";
            break;

        case "13n":      // snow
            bgPath = "public/weatherImages/snow.jpg";
            break;
        
        case "50d":      // mist & haze
            bgPath = "public/weatherImages/mist.jpg";
            break;

        case "50n":      // mist & haze
            bgPath = "public/weatherImages/mist.jpg";
            break;

        default:
            bgPath = "";
            break;
    }
    return bgPath;
};
