import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityWeatherAction } from "../Redux/Actions/weatherAction";

export default function Dashboard() {
    const dispatch =useDispatch()
    const searchCityWeather = useSelector(state=>state.Weather.cityWeather)
    const loggedUserEmail = useSelector(state=>state.Users.email)
    const showWeather = async (e) => {
        e.preventDefault()
        const cityname = e.target.city.value
        const res = await axios.get(
          `http://localhost:7000/showweather?cityName=${cityname}&loggedUserEmail=${loggedUserEmail}`
        );
        console.log(res.data)
        dispatch(fetchCityWeatherAction(res.data));
      };
  return (
    <div>
      <h1>Dashboard Page</h1>
      <form onSubmit={showWeather}>
      <input type="text" name="city" />
      <button type="submit" >Search City Weather</button>
      </form>
      <div>{searchCityWeather}</div>
    </div>
  );
}
