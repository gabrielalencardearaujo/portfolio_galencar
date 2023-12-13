import SVGDownload from "./SVGDownload";
import styles from './IconDownload.module.css';

function IconDownload() {
  return (
    <span className={styles.icon} title="Download PDF">
      <SVGDownload />
    </span>
  )
}

export default IconDownload;