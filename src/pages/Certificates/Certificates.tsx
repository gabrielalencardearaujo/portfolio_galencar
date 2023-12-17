import styles from "./Certificates.module.css";
import CardFormation from "../../components/CardFormation/CardFormation";
import { TypeJsonFormation, jsonFormations } from "../../services/jsonFormations";

function Certificates() {
  return (
    <section className={styles.container}>
      <h1 className={`titleDetails ${styles.title}`}>FORMAÇÃO</h1>

      <div className={styles.content}>
        {jsonFormations.map((certificate: TypeJsonFormation, index: number) => (
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
