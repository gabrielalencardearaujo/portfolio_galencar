import React from "react";
import styles from "./About.module.css";
import CardPhoto from "./CardPhoto";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";

function About() {
  const [about, setAbout] = React.useState(false);

  return (
    <section className={styles.containerAbout}>
      <CardPhoto />
      <article>
        {about ? (
          <AboutMe onClick={() => setAbout((value) => !value)} />
        ) : (
          <Introduction onClick={() => setAbout((value) => !value)} />
        )}
      </article>
    </section>
  );
}

export default About;
