import styles from './About.module.css';
import CardPhoto from './CardPhoto';
import Introducion from './Introducion';
import AboutMe from './AboutMe';

function About() {
  return (
    <section className={styles.containerAbout}>
      <CardPhoto />
      <article>
        <Introducion />
        <AboutMe />
      </article>
    </section>
  )
}

export default About;