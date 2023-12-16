import styles from "./Technologies.module.css";
import CardFormation from "../../../components/CardFormation/CardFormation";
import Seta from "../../../components/SVGComponents/Seta";
import {jsonFormations,TypeJsonFormation} from '../../../services/jsonFormations';
import { NavLink } from "react-router-dom";
import AllTechnologies from "./AllTechnologies";

function Technologies() {
  return (
    <section className={styles.containerFormation}>
      <div className={`${styles.formation} animeEntryLeft`}>
        <h1 className="titleDetails">FORMAÇÃO</h1>

        {jsonFormations.map((certificate: TypeJsonFormation, index: number) => {
          if(index < 3) {
            return (
              <CardFormation 
              key={`key${index}`}
              src={certificate.src} 
              describe={certificate.describe} 
              dateStart={certificate.dateStart}
              dateEnd={certificate.dateEnd} />
            )
          }
        })}

        <NavLink to="education" className={styles.leftIdent}>
          <span className={`aboutMeLink linkInternal`}>
            Veja mais
            <span className="animeLoop">
              <Seta />
            </span>
          </span>
        </NavLink>

      </div>

      <div className={styles.technologies}>
        <h1 className="titleDetails">TECNOLOGIAS</h1>

        <div className={styles.containerIcons}>
          <AllTechnologies />
        </div>
        
      </div>
    </section>
  );
}

export default Technologies;
