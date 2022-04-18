import React from "react";
import { NavLink, withRouter } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/AddContact">Add Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
