import styles from "./IconsSocialMedia.module.css";

type attrProps = React.ComponentProps<"a"> & {
  describe: string;
};

function IconSocialMedia({ href, children, describe, ...props }: attrProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={styles.iconSocialMedia}
      title={describe}
      {...props}
    >
      {children}
    </a>
  );
}

export default IconSocialMedia;
