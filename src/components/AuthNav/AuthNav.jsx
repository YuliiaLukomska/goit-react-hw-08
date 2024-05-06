import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  const activeLinkClass = ({ isActive }) => {
    return clsx(css.authLink, { [css.active]: isActive });
  };
  return (
    <div className={css.authNavWrapper}>
      <NavLink to="/register" className={activeLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={activeLinkClass}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
