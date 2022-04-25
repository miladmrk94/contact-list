import React from "react";
import Footer from "../Components/Footer";
const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
