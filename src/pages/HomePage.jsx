import DocumentTitle from "../DocumentTitle";
import css from "../components/Styles/HomePage.module.css";
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
          Manage your contacts and keep in touch with your people easily!
        </h1>
        <h2 className={css.visuallyHidden}>
          How to use this application effectively
        </h2>
        <ul className={css.usageList}>
          <li className={css.usageItem}>
            <MdAccountBox size="36" className={css.homePageIcon} />
            Create your account using a simple sign up form or use the log in
            form to enter your profile.
          </li>
          <li className={css.usageItem}>
            <IoPersonAddOutline size="36" className={css.homePageIcon} />
            Add contacts using a convenient form and save your private contacts
            on the contacts page.
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
