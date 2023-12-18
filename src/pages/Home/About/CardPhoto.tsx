import galencar from "../../../assets/img/galencar.jpg";
import styles from "./CardPhoto.module.css";

function CardPhoto() {
  return (
    <div className={`${styles.cardPhotoContainer} animeEntryLeft`}>
      <img src={galencar} alt="" />
      <div>
        <p className={styles.name}>Gabriel Alencar</p>
        <p className={styles.city}>São Paulo - SP</p>
      </div>
    </div>
  );
}

export default CardPhoto;
