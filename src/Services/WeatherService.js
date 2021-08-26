import http from "./http-common";

class WeatherService {
  get(data, email) {
    return http.get(
      `/showweatherbycordinate?latitude=${data.latitude}&longitude=${data.longitude}&loggedUserEmail=${email}`
    );
  }

  getWeatherByCity(cityname, email) {
    return http.get(`/showweathers?cityName=${cityname}&email=${email}`);
  }

  getCitySearchHistory(email) {
    return http.get(`/showcitysearchhistory?email=${email}`);
  }
}

export default new WeatherService();
