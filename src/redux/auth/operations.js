import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetCurrentUser,
  requestUserLogIn,
  requestUserLogOut,
  requestUserSignUp,
  setToken,
} from "../../services/authServices";

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestUserSignUp(formData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestUserLogIn(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await requestUserLogOut();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
/* рефрешинг - автоматичний логін після оновлення сторінки. Щоб після оновлення сторінки нас одразу 
закидувало на сторінку додатку, і не треба було знову логінитись знову. Отже, для цього нам треба щоб в заголовках був токен користувача.
Для цього дістаємо значення токена зі стейту і додаємо його до заголовків перед виконанням запиту. В об'єкта 
thunkAPI є метод getState який поверне весь стейт додатку. При оновленні сторінки весь стейт обнуляється, окрім токену, бо він буде записаний з локального 
сховища, бо під капотом у нас працює персіст*/
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (token === null) {
      /* If there is no token (а це відбувається тоді, коли ти виходиш з акаунту і на сторінці логіну/реєстрації 
      обновлюєш/перезавантажуєш сторінку. Тобто робиш рефрешинг - запит по токену, а токена нема, бо ти розлогінився), exit without performing any request*/
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setToken(token);
      const data = await requestGetCurrentUser();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
