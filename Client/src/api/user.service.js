import axios from "axios";

const API_URL = "http://localhost:5000/api/user/";

const updateUser = async (data) => {
  return axios.post(API_URL, data);
};

const userService = { updateUser };

export default userService;
