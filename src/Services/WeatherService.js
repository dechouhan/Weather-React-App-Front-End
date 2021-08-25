import http from "./http-common";

class WeatherService {
  get(data, email) {
    return http.get(
      `/showweatherbycordinate?latitude=${data.latitude}&longitude=${data.longitude}&loggedUserEmail=${email}`
    );
  }
}

export default new WeatherService();
