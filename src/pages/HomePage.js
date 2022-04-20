import React, { useEffect, useState } from "react";
import FilterContact from "../Components/FilterContact";
import ShowContact from "../Components/ShowContact";
import http from "./../services/HttpRequest";

const HomePage = () => {
  const [contact, setContact] = useState([]);
  const [allContact, setAllContact] = useState([]);

  const deleteHandler = (id) => {
    //------------ deleted data from localStorage
    // console.log(id);
    // const index = contact.filter((i) => {
    //   return i.id !== id;
    // });
    // setContact(index);

    //------------ deleted data from server
    console.log(id);
    http
      .delete(`/contact/${id}`)
      .then(() => {
        http
          .get("/contact")
          .then((res) => {
            setContact(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => alert("err 404", err));
  };

  const searchHandler = (e) => {
    const data = [...contact];
    const filter = data.filter((i) => {
      return Object.values(i)
        .join("")
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    if (e.target.value !== "") {
      setContact(filter);
    } else {
      setContact(allContact);
    }
  };

  //--------------get data with localStorage
  // useEffect(() => {
  //   const saveData = JSON.parse(localStorage.getItem("values"));
  //   if (contact) setContact(saveData);
  // }, []);

  //--------------get data with http req
  useEffect(() => {
    const getData = async () => {
      await http
        .get("/contact")
        .then((res) => {
          if (contact) {
            setContact(res.data);
            setAllContact(res.data);
          }
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("values", JSON.stringify(contact));
  // }, [contact]);

  return (
    <>
      <FilterContact onChange={searchHandler} />
      {contact ? (
        <ShowContact contact={contact} deleteHandler={deleteHandler} />
      ) : (
        <h3>Oops</h3>
      )}
    </>
  );
};

export default HomePage;
