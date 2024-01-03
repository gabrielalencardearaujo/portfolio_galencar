import styles from "./Introduction.module.css";
import IconGithub from "../../../components/IconsSocialMedia/IconGithub";
import IconLinkedin from "../../../components/IconsSocialMedia/IconLinkedin";
import IconWhatsapp from "../../../components/IconsSocialMedia/IconWhatsapp";
import IconSocialMedia from "../../../components/IconsSocialMedia/IconSocialMedia";
import Seta from "../../../components/SVGComponents/Seta";
import { introductionProps } from "./type";

function Introduction({ ...props }: introductionProps) {
  return (
    <section className={`${styles.container} animeEntryRight`}>
      <div>
        <h1 className={styles.title}>
          Desenvolvedor <span></span>
        </h1>
        <p className={styles.content}>
          Olá, meu nome é Gabriel Alencar, sou desenvolvedor fullstack
          freelancer especializado na MERN Stack, com conhecimentos em UI&UX,
          Typescript, MySQL e PHP.
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
            href="https://www.linkedin.com/in/gabriel-alencar-de-araujo/"
            describe="Linkedin"
          >
            <IconLinkedin />
          </IconSocialMedia>

          <IconSocialMedia
            href="https://wa.me/5511955208843"
            describe="Whatsapp"
          >
            <IconWhatsapp />
          </IconSocialMedia>
        </div>

        <span className={`${styles.btnAboutMe} aboutMeLink linkInternal`} {...props}>
          <p>Sobre Mim</p>
          <span className="animeLoop">
            <Seta />
          </span>
        </span>
      </div>
    </section>
  );
}

export default Introduction;
