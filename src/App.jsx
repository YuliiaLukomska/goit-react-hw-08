import { useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contacts/operations";
import { lazy, useEffect } from "react";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Registration from "./pages/Registration";
// import Login from "./pages/Login";
// import Contacts from "./pages/Contacts";
const Home = lazy(() => import("./pages/Home"));
const Registration = lazy(() => import("./pages/Registration"));
const Login = lazy(() => import("./pages/Login"));
const Contacts = lazy(() => import("./pages/Contacts"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
