import styles from './CardProjects.module.css'
import { TypejsonFormatProjects } from "../../services/professionalCardProjects";

function CardProjects({
  url,
  describe,
  technologies,
  github,
  title,
  src,
  alt,
}: TypejsonFormatProjects) {
  return (
    <div className={styles.cardContainer}>
      <img src={src} alt={alt} />
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.describe}>{describe}</p>
        <p className={styles.technologies}>{technologies}</p>

        <span>
          <a href={url} target="_blank" rel="noopener noreferrer">Acessar site</a>
          <a href={github} target="_blank" rel="noopener noreferrer">Repositorio Github</a>
        </span>
      </div>
    </div>);
}

export default CardProjects;
