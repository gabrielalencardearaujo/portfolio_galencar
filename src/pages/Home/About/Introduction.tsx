import styles from "./Introduction.module.css";
import IconGithub from "../../../components/IconsSocialMedia/IconGithub";
import IconLinkedin from "../../../components/IconsSocialMedia/IconLinkedin";
import IconWhatsapp from "../../../components/IconsSocialMedia/IconWhatsapp";
import IconSocialMedia from "../../../components/IconsSocialMedia/IconSocialMedia";
import Seta from "../../../components/SVGComponents/Seta";
import { stateAbout } from "./type";


function Introducion({ setAbout }: stateAbout) {
  return (
    <div className={`${styles.container} animeEntryRight`}>
      <div>
        <h1 className={`${styles.title}`}>
          Desenvolvedor <span className="active">FullStack</span>_
        </h1>
        <p className={styles.content}>
          Olá, sou o Gabriel Alencar, um desenvolvedor fullstack freelancer especializado na MERN Stack, com conhecimentos em UI&UX, Typescript, MySQL e PHP.
        </p>
      </div>

      <div className={styles.mediasContainer}>
        <div className={styles.socialMedias}>
          <IconSocialMedia
            href={"https://github.com/gabrielalencardearaujo"}
            describe="Github"
          >
            <IconGithub />
          </IconSocialMedia>

          <IconSocialMedia
            href="https://linkedin.com/in/gabriel-alencar-de-araújo"
            describe="Linkedin"
          >
            <IconLinkedin />
          </IconSocialMedia>

          <IconSocialMedia href="" describe="Whatsapp">
            <IconWhatsapp />
          </IconSocialMedia>
        </div>
        <span
          onClick={() => setAbout((value) => !value)}
          className={`${styles.aboutMeLink}  linkInternal`}
        >
          Sobre Mim
          <span className="animeLoop">
            <Seta />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Introducion;
