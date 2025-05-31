export const bgImg = (icon) => {

    let bgPath = "";

    switch (icon) 
    {
        case "01d":       // clear sky day
            bgPath = "weatherImages/clearsky.jpg";
            break;

        case "01n":      //clear sky night
            bgPath = "weatherImages/clearskynight.jpg";
            break;

        case "02d":     // few clouds day
            bgPath = "weatherImages/fewclouds.jpg";
            break;

        case "02n":     // few clouds night
            bgPath = "weatherImages/fewcloudsnight.jpg";
            break;

        case "03d":     // scattered clouds  // white clouds
            bgPath = "weatherImages/scatteredclouds.jpg";
            break;

        case "03n":     // scattered clouds  // white clouds
            bgPath = "weatherImages/scatteredclouds.jpg";
            break;

        case "04d":     // broken clouds   // black clouds
            bgPath = "weatherImages/brokenclouds.jpg";
            break;
        
        case "04n":     // broken clouds  //black clouds
            bgPath = "weatherImages/brokenclouds.jpg";
            break;

        case "09d":     // rain
            bgPath = "weatherImages/rain.jpg"; 
            break;

        case "09n":     // rain
            bgPath = "weatherImages/rain.jpg"; 
            break;

        case "10d":     // rain
            bgPath = "weatherImages/rain.jpg";
            break;

        case "10n":     // rain
            bgPath = "weatherImages/rain.jpg";
            break;

        case "11d":     // thunderstorm
            bgPath = "weatherImages/thunderstorm.jpg";
            break;

        case "11n":     // thunderstorm
            bgPath = "weatherImages/thunderstorm.jpg";
            break;

        case "13d":      // snow
            bgPath = "weatherImages/snow.jpg";
            break;

        case "13n":      // snow
            bgPath = "weatherImages/snow.jpg";
            break;
        
        case "50d":      // mist & haze
            bgPath = "weatherImages/mist.jpg";
            break;

        case "50n":      // mist & haze
            bgPath = "weatherImages/mist.jpg";
            break;

        default:
            bgPath = "";
            break;
    }
    return bgPath;
};
