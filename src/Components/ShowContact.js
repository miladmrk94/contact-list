import React from "react";
import { Link } from "react-router-dom";
const ShowContact = ({ deleteHandler, contact }) => {
  return (
    <div>
      {contact.map((i) => {
        return (
          <div
            key={i.id}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              border: "solid 3px black",
              margin: "15px",
              justifyContent: "space-evenly",
            }}
          >
            <Link
              to={{ pathname: `/contact/${i.id}`, state: { contact: i } }}
              style={{ display: "flex" }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "green",
                  borderRadius: "60px",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>{i.name}</h4>
                <h4>{i.email}</h4>
              </div>
            </Link>
            <button onClick={() => deleteHandler(i.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowContact;
