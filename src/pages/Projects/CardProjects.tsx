import React from "react";
import styles from "./CardProjects.module.css";
import { TypejsonFormatProjects } from "../../services/professionalCardProjects";
import { Link } from "react-router-dom";

//Verifica se o componente esta sendo visualizado e aplica a classe "show" (para mostra-lo na tela):
const observerEntry = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }
);

function CardProjects({
  url,
  describe,
  technologies,
  github,
  title,
  src,
  alt,
}: TypejsonFormatProjects) {
  React.useEffect(() => {
    const card = document.querySelectorAll(".hidden");
    card.forEach((element) => observerEntry.observe(element));
  });

  return (
    <div className={`${styles.cardContainer} hidden`}>
      <img src={src} alt={alt} />
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.describe}>{describe}</p>
        <p className={styles.technologies}>Tecnologias: {technologies}</p>

        <span>
          {url == '' ? (
           <Link to="/*" target="_blank" rel="noopener noreferrer">
            Acessar site
           </Link>
          ) : (
            <a href={url} target="_blank" rel="noopener noreferrer">
              Acessar site
            </a>
          )}
          
          <a href={github} target="_blank" rel="noopener noreferrer">
            Repositorio Github
          </a>
        </span>
      </div>
    </div>
  );
}

export default CardProjects;
