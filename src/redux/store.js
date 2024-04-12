import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// створюємо конфігурацію для збереження поля 'token' зі слайсу auth.
const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
  //   blacklist: [], -тут навпаки можна вказати ті властивості, які не повинні синхронізуватись з ЛС
};
/* у властивості reducer буде весь state нашого додатку. І в цього стейта буде дві властивості: contacts і filters. */

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Використовуємо persistStore для створення persistor для PersistGate який викор. в main.js
export const persistor = persistStore(store);

export default store;
