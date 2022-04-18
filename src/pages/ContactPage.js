import React, { useEffect, useState } from "react";
const ContactPage = ({ location, match }) => {
  console.log(location.state.contact);
  const data = location.state.contact;
  return (
    <div>
      <h2>{data.name}</h2>
      <h2>{data.email}</h2>
    </div>
  );
};

export default ContactPage;
