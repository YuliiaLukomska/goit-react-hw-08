import css from "./Grid.module.css";

const Grid = ({ children }) => {
  return <ul className={css.contactList}>{children}</ul>;
};

export default Grid;
