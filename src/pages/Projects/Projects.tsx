import styles from "./Projects.module.css";
import CardProjects from "./CardProjects";
import {
  professionalCardProjects,
  TypejsonFormatProjects,
  academicCardProjects
} from "../../services/professionalCardProjects";

function Projects() {
  return (
    <main className={styles.container}>
      <h1 className={`titleDetails ${styles.title}`}>Projetos Profissionais</h1>
      <section className={styles.content}>
        {professionalCardProjects.map(
          (project: TypejsonFormatProjects, index: number) => {
            return (
              <CardProjects
                key={`project-${index}`}
                url={project.url}
                title={project.title}
                describe={project.describe}
                technologies={project.technologies}
                github={project.github}
                src={project.src}
                alt={project.alt}
              />
            );
          }
        )}
      </section>
      <h1 className={`titleDetails ${styles.title}`}>Projetos Academicos</h1>
      <section className={styles.content}>
        {academicCardProjects.map(
          (project: TypejsonFormatProjects, index: number) => {
            return (
              <CardProjects
                key={`project-${index}`}
                url={project.url}
                title={project.title}
                describe={project.describe}
                technologies={project.technologies}
                github={project.github}
                src={project.src}
                alt={project.alt}
              />
            );
          }
        )}
      </section>
    </main>
  );
}

export default Projects;
