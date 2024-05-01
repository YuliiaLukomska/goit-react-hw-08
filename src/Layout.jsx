import { Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
// import Section from "./components/Section/Section";
// import Container from "./components/Container/Container";

const Layout = ({ children }) => {
  // Layout огортає всі Routes, тому передаємо їх як пропс children і огортаємо Suspense для lazy завантаження - оптимізація
  return (
    <>
      <AppBar />
      <main>
        <Section>
          <Container>
            <Suspense fallback={null}>{children}</Suspense>{" "}
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Layout;
