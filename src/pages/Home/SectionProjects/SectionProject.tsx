import CardProject from "./CardProject";
import styles from "./SectionProject.module.css";
import { describeCardProjects } from "../../../assets/img/utils";
import { NavLink } from "react-router-dom";
import Seta from "../../../components/SVGComponents/Seta";
import SetaSlide from "../../../assets/svg/SetaSlide";
import React from "react";

function SectionProject() {
  const [slide, setSlide] = React.useState(false);
  const sectionProjects: React.LegacyRef<HTMLElement> | HTMLElement = React.useRef(null);
  const slideBar: React.LegacyRef<HTMLDivElement> | HTMLElement = React.useRef(null);

  React.useEffect(() => {
    if(slide) {
      sectionProjects.current?.classList.add(`${styles.translate}`) 
      slideBar.current?.classList.remove(`${styles.left}`)
      slideBar.current?.classList.add(`${styles.right}`)
    } else {
      sectionProjects.current?.classList.remove(`${styles.translate}`) 
      slideBar.current?.classList.remove(`${styles.right}`)
      slideBar.current?.classList.add(`${styles.left}`)
    }       

  }, [slide]);

  // const handleClick:React.MouseEventHandler<HTMLDivElement> = (event) => {
  //   if(event.currentTarget.classList.contains('right')) {
  //     event.currentTarget.classList.remove('right')
  //     event.currentTarget.classList.add('left')
  //   } else {
  //     event.currentTarget.classList.add('right')
  //     event.currentTarget.classList.remove('left')
  //   }
  // };

  return (
    <section className={styles.container} ref={sectionProjects}>
      <div
        className={`${styles.barSlide} animeLoop ${styles.right}`}
        onClick={() => setSlide(!slide)}
        ref={slideBar}
      >
        <SetaSlide />
      </div>

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
