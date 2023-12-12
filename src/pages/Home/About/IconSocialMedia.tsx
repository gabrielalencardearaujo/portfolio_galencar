import { ReactElement } from "react";
import styles from "./Introduction.module.css";

type attrIcon = {
  href: string,
  children: ReactElement,
}

function IconSocialMedia({ href, children }: attrIcon) {
  return (
    <a href={href} target="_blank" className={styles.iconSocialMedia}>
      {children}
    </a>
  );
}

export default IconSocialMedia;
