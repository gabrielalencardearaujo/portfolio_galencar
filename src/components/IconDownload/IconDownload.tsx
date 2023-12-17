import SVGDownload from "./SVGDownload";
import styles from './IconDownload.module.css';

function IconDownload({pdf}: {pdf?: string}) {
  return (
    <a href={pdf} className={styles.icon} title="Download PDF" download={pdf}>
      <SVGDownload />
    </a>
  )
}

export default IconDownload;