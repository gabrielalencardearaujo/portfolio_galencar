import React from "react";
import SoloLeveling from "../../../assets/img/broly.jpg";
import styles from "./CardPhoto.module.css";

function CardPhoto() {
  return (
    <div className={styles.cardPhotoContainer}>
      <img src={SoloLeveling} alt="" />
      <div>
        <p className={styles.name}>Gabriel Alencar</p>
        <p className={styles.city}>São Paulo - SP</p>
      </div>
    </div>
  );
}

export default CardPhoto;
