import { ReactElement } from "react";
import styles from "./Introduction.module.css";

type attrIcon = {
  href: string;
  children: ReactElement,
  describe: string,
};

function IconSocialMedia({ href, children, describe }: attrIcon) {
  return (
    <a href={href} target="_blank" className={styles.iconSocialMedia} title={describe}>
      {children}
    </a>
  );
}

export default IconSocialMedia;
