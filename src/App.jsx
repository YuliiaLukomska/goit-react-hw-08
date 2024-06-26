import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import Layout from "./Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Loader from "./components/Loader/Loader";
const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/**Виходить, що неавторизованому користувачу будуть доступні всі маршрути, окрім КонтактсПейдж - ці маршрути будуть публічними,
 * а КонтактсПейдж буде приватним маршрутом. Але сторінки Реєстрації та Логінізвції мають обмеження (Викор RestrictedRoute) -
 * коли користувач зареєстрований, то він не може перейти на сторінку логіну чи реєстрації. Для цього йому треба вийти
 * з акаунту. Коли користувач перебуваючи на сторінці Контактів (url:/contacts) клацне LogOut, то стан додатку обнулиться,
 * і користувач стане незалогованим і відповідно isLoggedIn = false і спрацює Navigate to='/login' - користувач одразу
 * перейде на сторінку логінізації.
 */

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
