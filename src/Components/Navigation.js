import React from "react";
import styles from "../Styles/Navbar.module.scss";
import { NavLink, withRouter } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUserAdd,
  HiOutlineLightBulb,
} from "react-icons/hi";

const Navigation = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.box}>
        <NavLink activeClassName={styles.menu__bg} to="/" exact={true}>
          <HiOutlineHome
            size="25px"
            className={styles.menu__icon}
          ></HiOutlineHome>
        </NavLink>
      </div>

      <div className={styles.box}>
        <NavLink activeClassName={styles.menu__bg} to="/AddContact">
          <HiOutlineUserAdd
            size="25px"
            className={styles.menu__icon}
          ></HiOutlineUserAdd>
        </NavLink>
      </div>
      <div className={styles.box}>
        <NavLink activeClassName={styles.menu__bg} to="/a">
          <HiOutlineLightBulb
            size="25px"
            className={styles.menu__icon}
          ></HiOutlineLightBulb>
        </NavLink>
      </div>
    </nav>

    // <div className={styles.box}>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/AddContact">Add</NavLink>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default withRouter(Navigation);
