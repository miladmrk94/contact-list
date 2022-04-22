import React, { useState } from "react";
import styles from "../Styles/AddContact.module.scss";
const AddContact = ({ contactHandler }) => {
  const [value, setValue] = useState(null);

  const changeHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      //create id for data (save to localStorage)
      // You do not need an ID when you get information from another server
      // id: Math.floor(Math.random() * 100),
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      contactHandler(value);
      e.target.reset();
    } else {
      alert("pllllllllz");
    }
    setValue("");
  };
  return (
    <div>
      <form className={styles.formStyle} onSubmit={submitHandler}>
        <br />

        <label>Name:</label>
        <input type="text" name="name" onChange={changeHandler} />
        <br />

        <label>Email:</label>
        <input type="text" name="email" onChange={changeHandler} />
        <br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
