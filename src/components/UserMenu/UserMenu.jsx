import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { IoIosLogOut } from "react-icons/io";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenuWrapper}>
      <p className={css.userMenuWelcome}>
        Welcome, <span className={css.userMenuUserName}>{user.name}</span> !
      </p>
      <button onClick={onLogOut} type="button" className={css.logOutButton}>
        <IoIosLogOut />
      </button>
    </div>
  );
};

export default UserMenu;
