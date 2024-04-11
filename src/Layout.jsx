import { Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";

const Layout = ({ children }) => {
  // Layout огортає всі Routes, тому передаємо їх як children і огортаємо Suspens для lazy завантаження - оптимізація
  return (
    <div>
      <AppBar />

      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
