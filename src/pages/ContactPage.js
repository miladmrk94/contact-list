import React, { useState } from "react";
import http from "../services/HttpRequest";

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
    <div>
      <form onSubmit={submitHandler}>
        <label>name:</label>
        <input
          type="text"
          value={nameValue.name}
          name="name"
          onChange={changeHandler}
        />

        <label>email:</label>
        <input
          type="text"
          value={nameValue.email}
          name="email"
          onChange={changeHandler}
        />
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default ContactPage;
