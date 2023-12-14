import IconGithub from "../../../components/IconsSocialMedia/IconGithub";
import Seta from "../../../components/SVGComponents/Seta";
import styles from "./CarProject.module.css";

type cardProjectsProps = {
  name: string;
  describe: string;
  src: string;
  github: string;
  website: string;
};

function CardProject({
  src,
  name,
  describe,
  github,
  website,
}: cardProjectsProps) {

  return (
    <div className={styles.cardContainer}>
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
