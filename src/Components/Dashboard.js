import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityWeatherAction } from "../Redux/Actions/weatherAction";
import { showWeatherByCordinate } from "../Thunk/weatherThunk";

export default function Dashboard() {
  const dispatch = useDispatch();
  const searchCityWeather = useSelector((state) => state.Weather.cityWeather);
  const loggedUserEmail = useSelector((state) => state.Users.email);
  const isCordinates = useSelector((state) => state.Weather.locationCordinates);
  useEffect(() => {
    dispatch(showWeatherByCordinate(isCordinates, loggedUserEmail));
  }, [dispatch, loggedUserEmail, isCordinates]);

  const showWeather = (e) => async (dispatch) => {
    e.preventDefault();
    const cityname = e.target.city.value;
    try {
        const res = await axios.get(
          `http://localhost:7000/showweather?cityName=${cityname}&loggedUserEmail=${loggedUserEmail}`
        );
        dispatch(fetchCityWeatherAction(res.data));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h4>Check Weather</h4>
      <form onSubmit={(e) => dispatch(showWeather(e))}>
        <input type="text" name="city" />
        <br />
        <br />
        <button type="submit">Search City Weather</button>
      </form>
      <br />
      <br />
      <center>
        {searchCityWeather.name == null ? (
          ""
        ) : (
          <table>
            <tr>
              <td>City:</td>
              <td>
                <b>{searchCityWeather.name}</b>
              </td>
            </tr>
            <tr>
              <td>Temp:</td>
              <td>{searchCityWeather.main.temp}</td>
            </tr>
            <tr>
              <td>Feels Like</td>
              <td>{searchCityWeather.main.feels_like}</td>
            </tr>
            <tr>
              <td>Temp Min:</td>
              <td>{searchCityWeather.main.temp_min}</td>
            </tr>
            <tr>
              <td>Temp Max:</td>
              <td>{searchCityWeather.main.temp_max}</td>
            </tr>
            <tr>
              <td>Pressure:</td>
              <td>{searchCityWeather.main.pressure}</td>
            </tr>
            <tr>
              <td>Humidity:</td>
              <td>{searchCityWeather.main.humidity}</td>
            </tr>
          </table>
        )}
      </center>
    </div>
  );
}
