import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestUserSignUp = async (formData) => {
  const { data } = await instance.post("/users/signup", formData);
  setToken(data.token);
  return data;
};

export const requestUserLogIn = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  // кладемо інстансу в заголовки цей токен. Щоб при наступному запиті цей токен вже там був.
  setToken(data.token);
  return data;
};

export const requestUserLogOut = async () => {
  const { data } = await instance.post("/users/logout");
  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/users/current");
  return data;
};
