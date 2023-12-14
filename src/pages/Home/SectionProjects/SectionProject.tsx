import CardProject from "./CardProject";
import styles from "./SectionProject.module.css";
import { describeCardProjects } from "../../../assets/img/utils";

function SectionProject() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Projects</h1>
        {describeCardProjects.map((project, index) => (
          
          <CardProject
            key={`project${index}`}
            id={`project${index}`}
            src={project.src}
            name={project.name}
            describe={project.describe}
            github={project.github}
            website={project.website}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionProject;
