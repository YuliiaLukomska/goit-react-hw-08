import { NavLink } from "react-router-dom";
import Container from "../components/Container/Container";
import { PiWarningCircle } from "react-icons/pi";
import css from "../components/Styles/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Container>
      <div className={css.notFoundPageWrapper}>
        <PiWarningCircle size="50" />
        Page not found
        <NavLink to="/" className={css.backHomeLink}>
          Back to Home
        </NavLink>
      </div>
    </Container>
  );
};

export default NotFoundPage;
