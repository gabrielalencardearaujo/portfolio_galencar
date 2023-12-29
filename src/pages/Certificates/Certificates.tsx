import React from "react";
import styles from "./Certificates.module.css";
import CardFormation from "../../components/CardFormation/CardFormation";
import { TypeJsonFormation, jsonFormatCardCertificate } from "../../services/jsonFormatCardCertificate";

const observerEntry = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      } 
    })
  }
);

function Certificates() {
  React.useEffect(() => {
    const teste = document.querySelectorAll('.hidden')
    teste.forEach((element) => observerEntry.observe(element))
  })
  
  return (
    <section className={styles.container}>
      <h1 className={`titleDetails ${styles.title}`}>Certificados</h1>

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
