import styles from './ModalLanguage.module.css';

function ModalLanguage() {
  return (
    <div className={styles.modalContainer}>
      <div>
        <span className={styles.btnLanguage}>ENGLISH</span>
        <span className={styles.btnLanguage}>ESPAÑOL</span>
        <span className={styles.btnLanguage}>PORTUGUÊS</span>
      </div>
    </div>
  )
}

export default ModalLanguage