import React from "react";
import IconLanguages from "../../assets/svg/IconLanguages";
import ModalLanguage from "./ModalLanguage";
import styles from "./ModalLanguage.module.css";

function Languages() {
  const [modal, setModal] = React.useState(false);

  function handleLanguageModal() {
    setModal(!modal);
  }
  return (
    <span 
    className={styles.containerLanguage} 
    onClick={handleLanguageModal}>
      <IconLanguages />
      {modal &&<ModalLanguage />}
    </span>
  );
}

export default Languages;
