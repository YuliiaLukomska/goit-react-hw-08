import DocumentTitle from "../DocumentTitle";
import css from "../components/PagesStyles/HomePage.module.css";
import { MdAccountBox } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
import { RiFilter2Fill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <DocumentTitle>Welcome Page</DocumentTitle>
      <div className={css.homeSection}>
        <h1 className={css.title}>
          Contacts manager welcome page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <p className={css.text}>How to use this application effectively</p>
        <ul>
          <li>
            <p className={css.text}>
              <MdAccountBox />
              Create your account
            </p>
          </li>
          <li>
            <p className={css.text}>
              <IoPersonAddOutline />
              Add and save your private contacts
            </p>
          </li>
          <li>
            <p className={css.text}>
              <GrEdit />
              Edit your contacts
            </p>
          </li>
          <li>
            <p className={css.text}>
              <RiFilter2Fill />
              Use the filter to make your search easier
            </p>
          </li>
          <li>
            <p className={css.text}>
              <RiDeleteBin6Line />
              Delete contacts if it is necessary
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
