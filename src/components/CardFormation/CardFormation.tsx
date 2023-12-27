import React from "react";
import styles from "./CardFormation.module.css";
import IconDownload from "../IconDownload/IconDownload";

type CardProps = React.ComponentProps<"img"> & {
  describe: string;
  dateStart: string;
  dateEnd: string;
  props?: React.ReactNode[];
  pdf?: string,
};

function CardFormation({ src, alt, describe, dateStart, dateEnd, pdf, ...props }: CardProps) {

  return (
    <a href={pdf} target="_blank">
      <div className={`${styles.cardContainer} hidden`} {...props}>
        <img src={src} alt={alt} className={styles.image} />
        <div className={styles.content}>
          <p className={styles.describeCourse}>{describe}</p>
          <div className={styles.dateCourse}>
            <span>
              <p>Início do Curso: {dateStart}</p>
              <p>Fim do Curso: {dateEnd}</p>
            </span>
            <IconDownload pdf={pdf} />
          </div>
        </div>
      </div>
    </a>
  );
}

export default CardFormation;
