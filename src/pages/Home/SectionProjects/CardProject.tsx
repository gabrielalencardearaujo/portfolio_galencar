import IconGithub from "../../../components/IconsSocialMedia/IconGithub";
import styles from "./CarProject.module.css";

type cardProjectsProps = {
  id: string;
  name: string;
  describe: string;
  src: string;
  github: string;
  website: string;
};

function CardProject({
  id,
  src,
  name,
  describe,
  github,
  website,
}: cardProjectsProps) {

  return (
    <a
      href={website}
      target="_blank"
      className={`${styles.cardContainer} ${styles[id]}  hidden`}
      id={id}
    >
      <img src={src} alt="" />
      <span className={styles.iconContainer}>
        <a href={github} target="_blank" title="Acessar Repositório">
          <IconGithub />
        </a>
      </span>

      <div className={styles.popUpContainer}>
        <span>
          <h3>{name}</h3>
          <p>{describe}</p>
        </span>
      </div>
    </a>
  );
}

export default CardProject;
