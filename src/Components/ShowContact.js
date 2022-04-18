import React from "react";
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
            }}
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
            <button onClick={() => deleteHandler(i.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowContact;
