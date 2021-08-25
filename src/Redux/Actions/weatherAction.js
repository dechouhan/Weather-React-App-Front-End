import { FETCH_CITY_WEATHER } from ".";


export const fetchCityWeatherAction = (data) =>({
    type:FETCH_CITY_WEATHER,
    payload:data,
})