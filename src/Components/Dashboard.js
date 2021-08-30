import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { locationCordinatesAction } from "../Redux/Actions/weatherAction";
import {
  showWeatherByCity,
  showWeatherByCordinate,
} from "../Thunk/weatherThunk";

export default function Dashboard() {
  const dispatch = useDispatch();
  const searchCityWeather = useSelector((state) => state.Weather.cityWeather);
  const token = useSelector((state) => state.Users.token);
  const isCordinates = useSelector((state) => state.Weather.locationCordinates);
  const loggedUserCity = useSelector((state) => state.Users.city);
  useEffect(() => {
    if (!isCordinates) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        dispatch(
          locationCordinatesAction({ latitude: latitude, longitude: longitude })
        );
      });
    }

    if (isCordinates) {
      dispatch(showWeatherByCordinate(isCordinates, token));
    } else {
      dispatch(showWeatherByCity(loggedUserCity,token));
    }
  }, [dispatch, token, isCordinates, loggedUserCity]);

  const showWeather = (e) => {
    e.preventDefault();
    const cityname = e.target.city.value;
    dispatch(showWeatherByCity(cityname, token));
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h4>Check Weather</h4>
      <form onSubmit={showWeather}>
        <input type="text" name="city" />
        <br />
        <br />
        <button type="submit">Search City Weather</button>
      </form>
      <br />
      <br />
      <center>
        {searchCityWeather.name == null ? (
          <Spinner animation="border" variant="primary" />
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
