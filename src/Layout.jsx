import { Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";

const Layout = ({ children }) => {
  // Layout огортає всі Routes, тому передаємо їх як пропс children і огортаємо Suspense для lazy завантаження - оптимізація
  return (
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
