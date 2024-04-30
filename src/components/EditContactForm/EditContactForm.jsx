import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./EditContactForm.module.css";
import { useDispatch } from "react-redux";
import { patchContact } from "../../redux/contacts/operations";
import { ContactSchema } from "../ContactForm/ContactForm";

const EditContactForm = ({ name, number, contactId, onClose }) => {
  const initialFormData = {
    name: name,
    number: number,
  };

  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    const contactInfo = {
      id: contactId,
      data: data,
    };
    dispatch(patchContact(contactInfo));
    onClose();
  };

  return (
    <Formik
      initialValues={initialFormData}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.formWrapper}>
        <label className={css.formLabel}>
          Name
          <Field
            name="name"
            type="text"
            placeholder="Maria Moroz"
            className={css.formInput}
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.formLabel}>
          Number
          <Field
            name="number"
            type="text"
            placeholder="+(380)631234567"
            className={css.formInput}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button
          className={css.formBtn}
          type="submit"
          title="Click to edit your contact"
          aria-label="Edit your contact"
        >
          Edit contact
        </button>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
