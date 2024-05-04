import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import SearchBox from "../components/SearchBox/SearchBox";
import DocumentTitle from "../DocumentTitle";
import Section from "../components/Section/Section";
import css from "../components/Styles/ContactsPage.module.css";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <DocumentTitle>Your contacts</DocumentTitle>
      <h2 className={css.contactsPageTitle}>
        Generate and control your contacts conveniently!
      </h2>
      <div className={css.contactsPageWrapper}>
        <ContactForm />
        <div className={css.contactsWrapper}>
          <SearchBox />
          <ContactList />
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
