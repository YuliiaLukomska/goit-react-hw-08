import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  return (
    <div className={css.filterWrapper}>
      <p className={css.filterParagraph}>Find contacts by name or number</p>
      <input
        className={css.filterInput}
        value={inputValue}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      ></input>
    </div>
  );
};

export default SearchBox;
