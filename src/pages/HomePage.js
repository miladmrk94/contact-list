import React, { useEffect, useState } from "react";
import ShowContact from "../Components/ShowContact";

const HomePage = () => {
  const [contact, setContact] = useState([]);

  const deleteHandler = (id) => {
    console.log(id);
    const index = contact.filter((i) => {
      return i.id !== id;
    });
    setContact(index);
  };

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("values"));
    if (contact) setContact(saveData);
  }, []);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(contact));
  }, [contact]);
  return (
    <>
      {contact ? (
        <ShowContact contact={contact} deleteHandler={deleteHandler} />
      ) : (
        <h3>Oops</h3>
      )}
    </>
  );
};

export default HomePage;
