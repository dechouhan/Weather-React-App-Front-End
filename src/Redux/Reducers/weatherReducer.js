import { FETCH_CITY_WEATHER, RESET_CITY } from "../Actions";

  const initialState = {
    cityWeather: null,
  };
  
  const Weather = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CITY_WEATHER:
        return {
          ...state,
          cityWeather:action.payload
        };

      case RESET_CITY:
        return {
          ...state,
          cityWeather:null,
        };
      default:
        return state;
    }
  };
  export default Weather;
  