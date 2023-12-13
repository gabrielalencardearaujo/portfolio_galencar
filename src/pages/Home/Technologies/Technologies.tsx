import React from "react";
import styles from "./Technologies.module.css";
import CardFormation from "../../../components/CardFormation/CardFormation";
import Seta from "../../../components/SVGComponents/Seta";
import imgPUCPR from "../../../assets/img/logo-PUCPR.jpg";

function Technologies() {
  return (
    <section className={styles.containerFormation}>
      <div className={styles.formation}>
        <h1 className={styles.titleDetails}>FORMAÇÃO</h1>
        <CardFormation
          src={imgPUCPR}
          alt=""
          describe="Cursando Análise e Desenvolvimento de Sistemas na PUCPR"
          dateStart="Abril/2023"
          dateEnd="Julho/2025"
        />
        <CardFormation
          src=""
          alt=""
          describe="curso PUCPR"
          dateStart="Abril/2023"
          dateEnd="Abril/2023"

        />
        <CardFormation
          src=""
          alt=""
          describe="curso PUCPR"
          dateStart="Abril/2023"
          dateEnd="Abril/2023"

        />

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
