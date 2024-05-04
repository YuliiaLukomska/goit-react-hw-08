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
          Manage your contacts and keep in touch with your people!
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <h2 className={css.text}>How to use this application effectively</h2>
        <ul className={css.usageList}>
          <li className={css.usageItem}>
            <MdAccountBox size="36" className={css.homePageIcon} />
            Create your account.
          </li>
          <li className={css.usageItem}>
            <IoPersonAddOutline size="36" className={css.homePageIcon} />
            Add and save your private contacts.
          </li>
          <li className={css.usageItem}>
            <GrEdit size="36" className={css.homePageIcon} />
            Edit your contacts.
          </li>
          <li className={css.usageItem}>
            <RiFilter2Fill size="36" className={css.homePageIcon} />
            Use the filter to make your search easier.
          </li>
          <li className={css.usageItem}>
            <RiDeleteBin6Line size="36" className={css.homePageIcon} />
            Delete contacts if it is necessary.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
