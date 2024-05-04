import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../Styles/Form.module.css";
import style from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import { selectContacts } from "../../redux/contacts/selectors";

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
});

const INITIAL_FORM_DATA = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const currentContactsArray = useSelector(selectContacts);

  const handleSubmit = (data, formActions) => {
    const isAlreadyAdded = currentContactsArray.find(
      (item) =>
        item.name.toLowerCase() === data.name.toLowerCase() ||
        item.number === data.number
    );
    if (isAlreadyAdded) {
      toast("This contact is already added to your contacts!");
      return;
    }
    dispatch(addContact(data));
    formActions.resetForm();
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "pink",
            color: "black",
          },
        }}
      />
      <div className={style.formWrapper}>
        <h3 className={css.formTitle}>Create new contact</h3>
        <p className={css.formParagraph}>
          Fill this form using following examples!
        </p>
        <Formik
          initialValues={INITIAL_FORM_DATA}
          onSubmit={handleSubmit}
          validationSchema={ContactSchema}
        >
          <Form>
            <label className={css.formLabel}>
              <Field
                name="name"
                type="text"
                placeholder="Maria Moroz"
                className={css.formInput}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </label>
            <label className={css.formLabel}>
              <Field
                name="number"
                type="text"
                placeholder="+(380)631234567"
                className={css.formInput}
              />
              <ErrorMessage
                name="number"
                component="span"
                className={css.error}
              />
            </label>

            <button
              className={css.formBtn}
              type="submit"
              title="Click to create new contact"
              aria-label="Add new contact"
            >
              Add new contact
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
