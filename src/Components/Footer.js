import React from "react";
import Navigation from "./Navigation";
import Styles from "../Styles/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Navigation />
    </footer>
  );
};

export default Footer;
