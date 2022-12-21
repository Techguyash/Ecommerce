import React, { useState } from "react";
import styles from "./DropDown.module.css";
import { FiLogOut } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import {
  AiOutlineFolderAdd,
  AiOutlineNotification,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const DropDown = ({ isOpen, setisOpen }) => {
  return (
    <>
      <div
        className="nav__link nav_icon"
        onClick={(e) => {
          setisOpen(!isOpen);
        }}
      >
        <FiUser />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdown_item}>
            <CiSettings />
            Account
          </div>
          <div className={styles.dropdown_item}>
            <AiOutlineFolderAdd />
            Orders
          </div>
          <div className={styles.dropdown_item}>
            <AiOutlineHeart />
            Wishlist
          </div>
          <div className={styles.dropdown_item}>
            <AiOutlineNotification />
            Notifications
          </div>
          <div className={`${styles.dropdown_item}`}>
            <FiLogOut className={`${styles.icon}`} />
            Logout
          </div>
        </div>
      )}
    </>
  );
};
export default DropDown;
