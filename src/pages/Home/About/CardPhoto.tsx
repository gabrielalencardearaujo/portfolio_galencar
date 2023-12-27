import galencar from "../../../assets/img/galencar.jpg";
import styles from "./CardPhoto.module.css";
import IconDownload from "../../../components/IconDownload/IconDownload";

function CardPhoto() {
  return (
    <div className={`${styles.cardPhotoContainer} animeEntryLeft`}>
      <img src={galencar} alt="" />
      <div>
        <p className={styles.name}>Gabriel Alencar</p>
        <p className={styles.city}>São Paulo - SP</p>
      </div>
      <a href='#' className={styles.btnCurriculum}>
        curriculum v. <IconDownload />
      </a>
    </div>
  );
}

export default CardPhoto;
