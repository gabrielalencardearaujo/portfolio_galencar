import styles from "./Certificates.module.css";
import CardFormation from "../../components/CardFormation/CardFormation";
import { TypeJsonFormation, jsonFormatCardCertificate } from "../../services/jsonFormatCardCertificate";

function Certificates() {
  return (
    <section className={styles.container}>
      <h1 className={`titleDetails ${styles.title}`}>FORMAÇÃO</h1>

      <div className={styles.content}>
        {jsonFormatCardCertificate.map((certificate: TypeJsonFormation, index: number) => (
          <CardFormation
          key={`key${index}`}
          pdf={certificate.pdf}
          src={certificate.src}
          describe={certificate.describe}
          dateStart={certificate.dateStart}
          dateEnd={certificate.dateEnd} />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
