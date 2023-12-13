import React from "react";
import styles from "./CardFormation.module.css";

type CardProps = React.ComponentProps<"img"> & {
  describe: string;
  dateStart: string;
  dateEnd: string;
};

function CardFormation({ src, alt, describe, dateStart, dateEnd }: CardProps) {
  return (
    <div className={styles.containerClass}>
      <img src={src} alt={alt} />
      <div className={styles.content}>
        <p className={styles.describeCourse}>{describe}</p>
        <div className={styles.dateCourse}>
          <p>Início do Curso: {dateStart}</p>
          <p>Fim do Curso: {dateEnd}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFormation;
