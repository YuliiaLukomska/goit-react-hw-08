import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.navigationWrapper}>
      <NavLink className={css.headerLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.headerLink}>
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
