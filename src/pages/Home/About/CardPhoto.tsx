import galencar from "../../../assets/img/galencar.jpg";
import styles from "./CardPhoto.module.css";
import IconDownload from "../../../components/IconDownload/IconDownload";
import Curriculum from "../../../assets/img/Certificates/PDFs/curriculum.pdf";

function CardPhoto() {
  return (
    <div className={`${styles.cardPhotoContainer} animeEntryLeft`}>
      <img src={galencar} alt="Foto Gabriel Alencar" />
      <div>
        <p className={styles.name}>Gabriel Alencar</p>
        <p className={styles.city}>São Paulo - SP</p>
      </div>
      <a href={Curriculum} 
        className={styles.btnCurriculum}
        target="_blank" 
      >
        curriculum v. <IconDownload pdf={Curriculum} />
      </a>
    </div>
  );
}

export default CardPhoto;
