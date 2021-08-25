import { fetchCityWeatherAction } from "../Redux/Actions/weatherAction";
import WeatherService from "../Services/WeatherService";


export const showWeatherByCordinate = (data,email) => async (dispatch) => {
    try {
      const res = await WeatherService.get(data,email);
      dispatch(fetchCityWeatherAction(res.data));
    } catch (err) {
      alert(err);
    }
  };