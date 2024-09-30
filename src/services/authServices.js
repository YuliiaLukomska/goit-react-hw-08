import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const requestUserSignUp = async (formData) => {
  const { data } = await instance.post("/users/signup", formData);
  // After successful registration, add the token to the HTTP header
  setToken(data.token);
  return data;
};

export const requestUserLogIn = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  // кладемо інстансу в заголовки цей токен. Щоб при наступному запиті цей токен вже там був.
  // After successful login, add the token to the HTTP header
  setToken(data.token);
  return data;
};

export const requestUserLogOut = async () => {
  const { data } = await instance.post("/users/logout");
  // After a successful logout, remove the token from the HTTP header
  clearToken();
  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/users/current");
  return data;
};
