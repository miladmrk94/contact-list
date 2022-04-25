import React, { useState } from "react";
import http from "../services/HttpRequest";
import styles from "../Styles/ContactPage.module.scss";

const ContactPage = ({ location, match, history }) => {
  const data = location.state.contact;
  const [nameValue, setNameValue] = useState(data);

  const changeHandler = (e) => {
    setNameValue({ ...nameValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const putData = async () => {
      await http.put(`/contact/${match.params.id}`, nameValue);
      await history.push("/");
    };
    putData();
    console.log(nameValue);
  };

  return (
    <div className={styles.box}>
      <div className={styles.profile}>
        <div className={styles.userImg}>
          <p>{nameValue.name}</p>
          <img
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${nameValue.name}.svg`}
            alt="avatar"
          />
        </div>
      </div>

      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.name}>
          <label>name:</label>
          <input
            type="text"
            value={nameValue.name}
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.email}>
          <label>email:</label>
          <input
            type="text"
            value={nameValue.email}
            name="email"
            onChange={changeHandler}
          />
        </div>

        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default ContactPage;
