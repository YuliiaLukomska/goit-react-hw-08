import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Your contacts</h1>
      <ContactForm />
      <ContactList />
    </>
  );
};

export default Contacts;
