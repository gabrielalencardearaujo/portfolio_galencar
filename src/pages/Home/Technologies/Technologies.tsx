import styles from "./Technologies.module.css";
import CardFormation from "../../../components/CardFormation/CardFormation";
import Seta from "../../../components/SVGComponents/Seta";
import {jsonFormations,TypeJsonFormation} from '../../../services/jsonFormations';

function Technologies() {
  return (
    <section className={styles.containerFormation}>
      <div className={styles.formation}>
        <h1 className={styles.titleDetails}>FORMAÇÃO</h1>

        {jsonFormations.map((certificate: TypeJsonFormation, index: number) => {
          if(index < 3) {
            return (
              <CardFormation 
              src={certificate.src} 
              describe={certificate.describe} 
              dateStart={certificate.dateStart}
              dateEnd={certificate.dateEnd} />
            )
          }
        })}

        <span className={`${styles.leftIdent} aboutMeLink  linkInternal`}>
          Veja mais
          <span className="animeLoop">
            <Seta />
          </span>
        </span>
      </div>

      <div className={styles.technologies}>
        <h1 className={styles.titleDetails}>TECNOLOGIAS</h1>
      </div>
    </section>
  );
}

export default Technologies;
