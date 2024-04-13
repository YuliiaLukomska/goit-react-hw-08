import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ redirectTo = "/", component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  /* цей компонент стає значенням element в Route (для реєстрації та логіну) і передаємо в нього два пропси (redirectTo і component). 
  Таким чином при знаходженні на сторінці Реєстрації чи Логіну ми перевіряємо чи залогінений користувач, якщо так, 
  то одразу після реєстрації/логіну перенаправляємо його на сторінку контактів, щоб він після логіну чи реєстрації не залишався 
  на сторінці логіну/реєстрції, а якщо незалогігений, то і надалі щоб бачив цю сторінку логіну/реєстрації */
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
