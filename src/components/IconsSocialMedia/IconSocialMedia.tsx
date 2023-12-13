import styles from "./IconsSocialMedia.module.css";

type attrIcon = {
  href: string;
  children: React.ReactNode,
  describe: string,
}

function IconSocialMedia({ href, children, describe }: attrIcon) {
  
  return (
    <a href={href} target="_blank" className={styles.iconSocialMedia} title={describe}>
      {children}
    </a>
  );
}

export default IconSocialMedia;
