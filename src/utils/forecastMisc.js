// getting the rough max and min temperatures for 5 days forecast using the 3 hours API CALL


export const getMinTemp = (lowerLimit, upperLimit, list = []) => 
{
    const minArray = [];
    for(let i = lowerLimit; i <= upperLimit; i++)
    {
        minArray.push(list[i]?.main?.temp_min);
    }
    return Math.min(...minArray);
}

export const getMaxTemp = (lowerLimit, upperLimit, list = []) => 
{  
    const maxArray = [];
    for(let i = lowerLimit; i <= upperLimit; i++)
    {
        maxArray.push(list[i]?.main?.temp_max);
    }
    return Math.max(...maxArray);
}

    