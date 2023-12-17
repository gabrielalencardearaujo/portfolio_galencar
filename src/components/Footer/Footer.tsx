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
        <a href="" className="aboutMeLink" title="Acessar Linkedin">Linkedin</a>
        <a href="" className="aboutMeLink" title="Acessar Github">Github</a>
        <a href="" className="aboutMeLink" title="Acessar Whatsapp">Whatsapp</a>
      </div>

      <div className={styles.linkSocialMedia}>
        <Link to="/" className="aboutMeLink">Home</Link>
        <Link to="/projects" className="aboutMeLink">Projetos</Link>
        <Link to="/education" className="aboutMeLink">Formação</Link>
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
