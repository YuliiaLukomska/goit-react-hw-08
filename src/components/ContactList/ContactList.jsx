import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
      <Grid>
        {visibleContacts.length > 0 &&
          visibleContacts.map((contact) => (
            <GridItem key={contact.id}>
              <Contact data={contact} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default ContactList;
