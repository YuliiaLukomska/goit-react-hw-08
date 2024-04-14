import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  /* цей компонент стає значенням element в Route сторінки Контактів і передаємо в нього два пропси (redirectTo і component). 
  Таким чином при знаходженні на сторінці Контактів ми перевіряємо чи залогінений користувач, якщо ні, 
  то одразу перенаправляємо його на сторінку логіну, якщо так, то залишається на сторінці контактів*/
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
