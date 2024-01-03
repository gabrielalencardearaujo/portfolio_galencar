import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Seta from "../SVGComponents/Seta";

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className="logo">
        <span className="logoDetails">
          <strong className="active">G.</strong>Alencar
        </span>
      </div>

      <div className={styles.linkSocialMedia}>
        <a
          href="https://www.linkedin.com/in/gabriel-alencar-de-araujo/"
          className="aboutMeLink"
          title="Acessar Linkedin"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/gabrielalencardearaujo"
          className="aboutMeLink"
          title="Acessar Github"
          target="_blank"
        >
          Github
        </a>
        <a
          href="https://wa.me/5511955208843"
          className="aboutMeLink"
          title="Acessar Whatsapp"
          target="_blank"
        >
          Whatsapp
        </a>
      </div>

      <div className={styles.internalLinks}>
        <Link to="/" className="aboutMeLink">
          Home
        </Link>
        <Link to="/projects" className="aboutMeLink">
          Projetos
        </Link>
        <Link to="/education" className="aboutMeLink">
          Formação
        </Link>
      </div>

      <div className={styles.voltarTopo}>
        <a href="#header">
          <Seta />
          <p>Voltar ao Topo</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
