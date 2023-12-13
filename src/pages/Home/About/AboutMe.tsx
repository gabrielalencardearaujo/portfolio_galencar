import Seta from "../../../components/SVGComponents/SetaLeft";
import styles from "./Introduction.module.css";
import { stateAbout } from "./type";

function AboutMe({setAbout}: stateAbout) {
  return (
    <article className={`${styles.container} animeEntryRight`}>
      <h2>Um pouco mais sobre mim...</h2>
      <p>
        Meu nome é <strong className="active">Gabriel Alencar</strong>,
        sou apaixonado por programação, automação e comprometido com a excelência na
        criação de soluções inovadoras. Com a{" "}
        <strong className="active">MERN Stack</strong> (<em>MongoDB</em>,{" "}
        <em>Express</em>, <em>React</em> e <em>NodeJS</em>) como minha
        ferramenta principal, trago à vida projetos dinâmicos e funcionais.
        Minha jornada no universo do desenvolvimento web é impulsionada pela
        busca incessante por desafios e pela constante evolução tecnológica. Meu
        objetivo é transformar conceitos em realidade digital. Com experiência
        sólida na construção de aplicativos web e um olhar atento aos detalhes
        de <strong className="active">UI/UX</strong>, busco oferecer não apenas
        código, mas também uma experiência envolvente para os usuários. Este
        espaço é uma amostra do meu trabalho, onde cada linha de código reflete
        minha dedicação e paixão pelo desenvolvimento de software. Seja
        bem-vindo(a) ao meu mundo de inovação e criatividade. Estou ansioso para
        colaborar em projetos desafiadores e fazer parte de equipes que buscam
        superar limites. Vamos criar algo extraordinário juntos!
      </p>
      <span
          onClick={() => setAbout((value) => !value)}
          className={`${styles.aboutMeLink} linkInternal`}
        >
          <span className={`animeLoop`}>
            <Seta />
          </span>
          Sobre Mim
        </span>
    </article>
  );
}

export default AboutMe;
