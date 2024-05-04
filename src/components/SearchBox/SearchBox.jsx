import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  return (
    <div className={css.filterInput}>
      <p>Find contacts by name or number</p>
      <input
        value={inputValue}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      ></input>
    </div>
  );
};

export default SearchBox;
