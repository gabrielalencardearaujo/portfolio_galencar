import Seta from "../../../components/SVGComponents/SetaLeft";
import styles from "./Introduction.module.css";
import { introductionProps } from "./type";

function AboutMe({ ...props }: introductionProps) {
  return (
    <article className={`${styles.container} animeEntryRight`}>
      <h2>Um pouco mais sobre mim...</h2>
      <p className={styles.describe}>
        Olá, sou Gabriel Alencar, sou entusiasta da programação e da automação,
        comprometido com a excelência na criação de soluções inovadoras. Minha
        jornada começou quando percebi a necessidade de automatizar processos
        rotineiros na empresa de Logística em que trabalhava, onde erros na
        checagem de centenas de materiais e serviços podiam prejudicar
        financeiramente os entregadores. Para resolver esse desafio, mergulhei
        nos estudos de <strong className="active">HTML</strong>, <strong className="active">CSS</strong> e <strong className="active">Javascript</strong>, criando um sistema com interface que
        automatizava o processo de verificação de materiais e realizava a baixa
        correta dos serviços no sistema. Essa experiência despertou em mim uma
        paixão pela programação.
        <br />
        Atualmente, atuo como freelancer utilizando a{" "}
        <strong className="active">MERN Stack</strong> (
        <em>MongoDB, Express, React e NodeJS</em>) como minha principal
        ferramenta. Sou estudante do curso de Análise e Desenvolvimento de
        Sistemas na PUCPR, e pretendo seguir carreira como desenvolvedor
        fullstack. Tenho algum conhecimento em outras linguagens como <strong className="active">Typescript</strong>, <strong className="active">PHP</strong>,{" "}
        <strong className="active">MySQL</strong>, <strong className="active">JAVA</strong>, <strong className="active">Python</strong>, e também tenho alguns conhecimentos em <strong className="active">UI&UX</strong>.
        </p>
      
      <span className={`aboutMeLink linkInternal`} {...props}>
        <span className={`animeLoop`}>
          <Seta />
        </span>
        Voltar
      </span>
    </article>
  );
}

export default AboutMe;
