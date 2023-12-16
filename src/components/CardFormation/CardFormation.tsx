import React from "react";
import styles from "./CardFormation.module.css";
import IconDownload from "../IconDownload/IconDownload";

type CardProps = React.ComponentProps<"img"> & {
  describe: string;
  dateStart: string;
  dateEnd: string;
  props?: React.ReactNode[];
};

function CardFormation({ src, alt, describe, dateStart, dateEnd, ...props }: CardProps) {
  return (
    <div className={styles.containerClass} {...props}>
      <img src={src} alt={alt} />
      <div className={styles.content}>
        <p className={styles.describeCourse}>{describe}</p>
        <div className={styles.dateCourse}>
          <span>
            <p>Início do Curso: {dateStart}</p>
            <p>Fim do Curso: {dateEnd}</p>
          </span>
          <IconDownload />
        </div>
      </div>
    </div>
  );
}

export default CardFormation;
