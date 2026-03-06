// components/Layout.tsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToHash from "./ScroolToHash";
import ScrollToTop from "./ScrollToTop";
import Chatbot from "./Chatbot";

const Layout = () => {
  return (
    <>
    <ScrollToHash/>
    <ScrollToTop/>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Chatbot/>
    </>
  );
};

export default Layout;