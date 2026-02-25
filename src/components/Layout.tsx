// components/Layout.tsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToHash from "./ScroolToHash";

const Layout = () => {
  return (
    <>
    <ScrollToHash/>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;