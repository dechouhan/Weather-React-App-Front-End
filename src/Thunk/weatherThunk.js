import {
  fetchCityWeatherAction,
  showCitySearchHistoryAction,
} from "../Redux/Actions/weatherAction";
import WeatherService from "../Services/WeatherService";

export const showWeatherByCordinate = (data, token) => async (dispatch) => {
  try {
    const res = await WeatherService.get(data, token);
    dispatch(fetchCityWeatherAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const showWeatherByCity = (cityname, token) => async (dispatch) => {
  try {
    const res = await WeatherService.getWeatherByCity(cityname, token);
    dispatch(fetchCityWeatherAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const showCitySearchHistory = (token) => async (dispatch) => {
  try {
    const res = await WeatherService.getCitySearchHistory(token);
    dispatch(showCitySearchHistoryAction(res.data));
  } catch (err) {
    alert(err);
  }
};
