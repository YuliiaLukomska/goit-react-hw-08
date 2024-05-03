import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import SearchBox from "../components/SearchBox/SearchBox";
import DocumentTitle from "../DocumentTitle";
import Section from "../components/Section/Section";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <DocumentTitle>Your contacts</DocumentTitle>
      <h1>Your contacts</h1>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </Section>
  );
};

export default Contacts;
