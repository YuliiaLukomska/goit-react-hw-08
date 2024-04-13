import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={onLogOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
