import React from "react";
import styles from "../Styles/FilterContact.module.scss";
import { HiOutlineSearch } from "react-icons/hi";
const FilterContact = ({ onChange }) => {
  return (
    <div className={styles.inputBox}>
      <HiOutlineSearch color="#26255e" size="28px" />
      <input placeholder="search contact..." onChange={onChange} />
    </div>
  );
};

export default FilterContact;
