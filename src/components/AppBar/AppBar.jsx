import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
import { TiContacts } from "react-icons/ti";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Container>
        <nav>
          <div className={css.appBarWrapper}>
            <NavLink to="/">
              <div className={css.logoWrapper}>
                Keep<span>in</span>Touch
                <TiContacts size="24" />
              </div>
            </NavLink>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default AppBar;
