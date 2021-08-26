import {
  fetchCityWeatherAction,
  showCitySearchHistoryAction,
} from "../Redux/Actions/weatherAction";
import WeatherService from "../Services/WeatherService";

export const showWeatherByCordinate = (data, email) => async (dispatch) => {
  try {
    const res = await WeatherService.get(data, email);
    dispatch(fetchCityWeatherAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const showWeatherByCity = (cityname, email) => async (dispatch) => {
  try {
    const res = await WeatherService.getWeatherByCity(cityname, email);
    dispatch(fetchCityWeatherAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const showCitySearchHistory = (email) => async (dispatch) => {
  try {
    const res = await WeatherService.getCitySearchHistory(email);
    dispatch(showCitySearchHistoryAction(res.data));
  } catch (err) {
    alert(err);
  }
};
