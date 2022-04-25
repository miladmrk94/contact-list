import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/ShowContact.module.scss";

import {
  HiDotsHorizontal,
  HiOutlineTrash,
  HiOutlineAnnotation,
} from "react-icons/hi";

const ShowContact = ({ deleteHandler, contact }) => {
  const handler = () => {};

  return (
    <div className={styles.contactBox}>
      {contact.map((i) => {
        return (
          <div className={styles.userBox} key={i.id}>
            <Link
              className={styles.userInfo}
              to={{ pathname: `/contact/${i.id}`, state: { contact: i } }}
            >
              <img
                src={`https://avatars.dicebear.com/api/adventurer-neutral/${i.name}.svg`}
                alt="avatar"
                className={styles.image}
              />
              <div className={styles.text}>
                <h4 className={styles.name}>{i.name}</h4>
                <h4 className={styles.email}>{i.email}</h4>
              </div>
            </Link>

            <button
              className={styles.delete}
              onClick={() => deleteHandler(i.id)}
            >
              <HiOutlineTrash size="20px" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowContact;
