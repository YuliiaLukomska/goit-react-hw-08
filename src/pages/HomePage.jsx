import DocumentTitle from "../DocumentTitle";
import css from "../components/PagesStyles/HomePage.module.css";

const Home = () => {
  return (
    <>
      <DocumentTitle>Welcome Page</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>
          Contacts manager welcome page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <p className={css.text}>
          Here you can create and save your private contacts, edit them and use
          the filter to make your search easier.
        </p>
      </div>
    </>
  );
};

export default Home;
