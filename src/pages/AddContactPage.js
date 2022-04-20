import React, { useState, useEffect } from "react";
import AddContact from "../Components/AddContact";
import http from "./../services/HttpRequest";

const AddContactPage = ({ history }) => {
  //-----------get data from localStorage
  // const local = JSON.parse(localStorage.getItem("values"));

  const [value, setValue] = useState(null);

  const contactHandler = (data) => {
    // set data With the required localStorage format
    // setValue([...value, data]);

    // set data form server
    setValue(data);
  };

  //-----------add contact no LocalStorage
  // useEffect(() => {
  //   localStorage.setItem("values", JSON.stringify(value));
  //   return () => {
  //     history.push("/");
  //   };
  // }, [value]);

  //-----------add contact no server
  useEffect(() => {
    if (value) {
      const postData = async () => {
        await http
          .post("/contact", value)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));

        await history.push("/");
      };
      postData();
    }
  }, [value]);

  return (
    <>
      <AddContact contactHandler={contactHandler} />
    </>
  );
};

export default AddContactPage;
