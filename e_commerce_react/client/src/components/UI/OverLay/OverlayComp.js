import React, { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import style from "./OverlayComp.module.css";

const BackDrop = (props) => {
  return <div className={style.backdrop} onClick={props.toggleShowLogin}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const OverlayComp = (props) => {
  const { toggleShowLogin } = useContext(AuthContext);
  return (
    <div className={style.component}>
      <BackDrop toggleShowLogin={toggleShowLogin} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </div>
  );
};

export default OverlayComp;
