import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";
import Container from "../Container/Container";

const Loader = () => {
  return (
    <Container>
      <div className={css.loaderWrapper}>
        <ColorRing
          visible={true}
          height="150"
          width="150"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    </Container>
  );
};

export default Loader;
