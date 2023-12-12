import styles from './About.module.css';
import CardPhoto from './CardPhoto';
import Introduction from './Introduction';
import AboutMe from './AboutMe';

function About() {
  return (
    <section className={styles.containerAbout}>
      <CardPhoto />
      <article>
        <Introduction />
        <AboutMe />
      </article>
    </section>
  )
}

export default About;