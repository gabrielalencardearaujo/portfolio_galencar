import CardProject from "./CardProject";
import styles from "./SectionProject.module.css";
import { describeCardProjects } from "../../../assets/img/utils";
import { NavLink } from "react-router-dom";
import Seta from "../../../components/SVGComponents/Seta";

function SectionProject() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Projects</h1>
        {describeCardProjects.map((project, index) => {
          if (index < 8) {
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

        <NavLink to="/projects" className={styles.seeMore}>
          Veja Mais
          <span className={styles.iconSeta}>
            <Seta />
          </span>
        </NavLink>
      </div>
    </section>
  );
}

export default SectionProject;
{
  /* <CardProject
            key={`project${index}`}
            id={`project${index}`}
            src={project.src}
            name={project.name}
            describe={project.describe}
            github={project.github}
            website={project.website}
          /> */
}
