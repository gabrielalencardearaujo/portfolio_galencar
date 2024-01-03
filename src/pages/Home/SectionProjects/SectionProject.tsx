import CardProject from "./CardProject";
import styles from "./SectionProject.module.css";
import { describeCardProjects } from "../../../assets/img/utils";
import { NavLink } from "react-router-dom";
import Seta from "../../../components/SVGComponents/Seta";

function SectionProject() {
  return (
    <section className={styles.container}>
      <h1 className="titleDetails">Projetos</h1>
      <div className={styles.content}>
        {describeCardProjects.map((project, index) => {
          if (index < 4) {
            return (
              <CardProject
                key={`project${index}`}
                id={`project${index}`}
                src={project.src}
                name={project.name}
                describe={project.describe}
                github={project.github}
                website={project.website}
              />
            );
          }
        })}

        <NavLink to="projects" className={styles.leftIdent}>
          <span className={`aboutMeLink linkInternal`}>
            <p>Veja mais</p>
            <span className="animeLoop">
              <Seta />
            </span>
          </span>
        </NavLink>
      </div>
    </section>
  );
}

export default SectionProject;
