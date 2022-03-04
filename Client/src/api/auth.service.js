import axios from "./axios";
import { userActions } from "./../actions/user.actions";

const API_URL = "http://localhost:5000/api/auth/";

const login = async ({ email, password }) => {
  const response = await axios.post(API_URL + "login", {
    email,
    password,
  });
  if (response.data.user) {
    localStorage.setItem("token", JSON.stringify(response.data.access_token));
  }
  return response.data;
};

const register = (firstName, lastName, email, password) => {
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    email,
    password,
  });
};

const getUser = () => {
  return axios.get("/api/user").then((res) => res);
};

const getLoggedInUser = (email) => {
  return axios.post("/api/logged-in-user", { email }).then((res) => res);
};

const getUserById = (id) => {
  return axios.get(`/api/user/${id}`);
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.reload(true);
};

const getPosts = () => {
  return axios.get("http://localhost:5000/api/login");
};

const authService = {
  register,
  login,
  logout,
  getPosts,
  getUser,
  getLoggedInUser,
};

export default authService;
