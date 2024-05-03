import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is rerquired!")
    .min(2, "User name must be at least two characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    dispatch(register(data));
    formActions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <h2 className={css.signUpTitle}>Sign Up</h2>
      <p className={css.signUpParagraph}>
        Create an account to enjoy all the services!
      </p>
      <Formik
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
        validationSchema={UserRegisterSchema}
      >
        <Form>
          <label className={css.formLabel}>
            <Field
              name="name"
              type="text"
              placeholder="Enter your name"
              className={css.formInput}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <label className={css.formLabel}>
            <Field
              name="email"
              type="text"
              placeholder="Enter your email"
              className={css.formInput}
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>
          <label className={css.formLabel}>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={css.formInput}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </label>

          <button className={css.formBtn} type="submit">
            Create Account
          </button>
        </Form>
      </Formik>
      <p className={css.formClarificationParagraph}>
        Already have an Account?{" "}
        <NavLink to="/login">
          <span className={css.logInSpan}>Log In</span>
        </NavLink>{" "}
      </p>
    </div>
  );
};

export default RegistrationForm;
