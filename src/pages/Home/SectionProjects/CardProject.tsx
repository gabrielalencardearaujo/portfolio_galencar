import IconGithub from "../../../components/IconsSocialMedia/IconGithub";
import Seta from "../../../components/SVGComponents/Seta";
import styles from "./CarProject.module.css";

type cardProjectsProps = {
  id: string
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
  console.log(id)

  return (
    <div className={`${styles.cardContainer} ${styles[id]}`} id={id}>
      <img src={src} alt="" />
      <span className={styles.iconContainer}>
        <a href={github} title="Repositório Github">
          <IconGithub />
        </a>
        <a href={website} title="Visitar Site">
          <Seta />
        </a>
      </span>

      <div className={styles.popUpContainer}>
        <span>
          <h3>{name}</h3>
          <p>{describe}</p>
        </span>
      </div>
    </div>
  );
}

export default CardProject;
