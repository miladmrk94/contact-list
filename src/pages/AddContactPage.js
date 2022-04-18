import React, { useState, useEffect } from "react";
import AddContact from "../Components/AddContact";
const AddContactPage = ({ history }) => {
  const local = JSON.parse(localStorage.getItem("values"));

  const [value, setValue] = useState(local ? local : "");

  const contactHandler = (data) => {
    console.log([data]);
    setValue([...value, data]);
  };

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(value));
    return () => {
      history.push("/");
    };
  }, [value]);

  return (
    <>
      <AddContact contactHandler={contactHandler} />
    </>
  );
};

export default AddContactPage;
