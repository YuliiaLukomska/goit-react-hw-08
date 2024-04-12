import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
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
    <Formik
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
      validationSchema={UserLoginSchema}
    >
      <Form className={css.formWrapper}>
        <label className={css.formLabel}>
          Email
          <Field name="email" type="text" />
          <ErrorMessage name="email" component="span" className={css.error} />
        </label>
        <label className={css.formLabel}>
          Password
          <Field name="password" type="password" />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </label>

        <button className={css.formBtn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
