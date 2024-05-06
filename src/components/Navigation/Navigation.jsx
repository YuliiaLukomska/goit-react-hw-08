import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const activeLinkClass = ({ isActive }) => {
    return clsx(css.headerLink, { [css.active]: isActive });
  };
  return (
    <div className={css.navigationWrapper}>
      <NavLink className={activeLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={activeLinkClass}>
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
