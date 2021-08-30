import http from "./http-common";

class WeatherService {
  get(data, token) {
    return http.get(
      `/showweatherbycordinate?latitude=${data.latitude}&longitude=${data.longitude}&token=${token}`
    );
  }

  getWeatherByCity(cityname, token) {
    return http.get(`/showweathers?cityName=${cityname}&token=${token}`);
  }

  getCitySearchHistory(token) {
    return http.get(`/showcitysearchhistory?token=${token}`);
  }
}

export default new WeatherService();
