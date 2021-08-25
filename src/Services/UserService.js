import http from "./http-common";

class UserService {
  getAll() {
    return http.get("/users");
  }

  signup(data) {
    return http.post("/signup", data);
  }

  login(data) {
    return http.post("/login", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }
}

export default new UserService();
