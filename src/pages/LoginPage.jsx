import DocumentTitle from "../DocumentTitle";
import LoginForm from "../components/LoginForm/LoginForm";
import Section from "../components/Section/Section";

const Login = () => {
  return (
    <Section>
      <DocumentTitle>Login Page</DocumentTitle>
      <LoginForm />
    </Section>
  );
};

export default Login;
