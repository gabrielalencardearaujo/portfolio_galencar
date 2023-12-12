import styles from "./Introduction.module.css";
import IconGithub from "../../../assets/svg/IconGithub";
import IconLinkedin from "../../../assets/svg/IconLinkedin";
import IconWhatsapp from "../../../assets/svg/IconWhatsapp";
import IconSocialMedia from "./IconSocialMedia";
import { Dispatch, SetStateAction } from "react";
import Seta from "../../../assets/svg/Seta";

type stateAbout = {
  setAbout: Dispatch<SetStateAction<boolean>>;
};

function Introducion({ setAbout }: stateAbout) {
  return (
    <div className={styles.IntroductionContainer}>
      <div>
        <h1 className={`${styles.title}`}>
          Desenvolvedor <span className="active">FullStack</span>_
        </h1>
        <p className={styles.content}>
          Olá, meu nome é Gabriel Alencar, sou desenvolvedor fullstack
          freelancer. A stack que mais utilizo é MERN e entendo um pouco de
          UI&UX.
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
          className={`${styles.aboutMeLink} linkInternal`}
        >
          Sobre Mim
          <span className="animeRight">
            <Seta />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Introducion;
