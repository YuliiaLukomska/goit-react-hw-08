import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../Styles/Form.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const UserLoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    dispatch(login(data));
    formActions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formParagraph}>
        Enter your account to enjoy all the services!
      </p>
      <Formik
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
        validationSchema={UserLoginSchema}
      >
        <Form>
          <label className={css.formLabel}>
            <Field
              name="email"
              type="text"
              className={css.formInput}
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>
          <label className={css.formLabel}>
            <Field
              name="password"
              type="password"
              className={css.formInput}
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </label>

          <button
            className={css.formBtn}
            type="submit"
            title="Click to log in"
            aria-label="Log in"
          >
            Enter an account
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
