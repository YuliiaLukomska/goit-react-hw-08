import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenuWrapper}>
      <p className={css.userMenuWelcome}>
        <VscAccount size="24" /> {user.name}
      </p>
      <button onClick={onLogOut} type="button" className={css.logOutButton}>
        <IoIosLogOut size="24px" />
      </button>
    </div>
  );
};

export default UserMenu;
