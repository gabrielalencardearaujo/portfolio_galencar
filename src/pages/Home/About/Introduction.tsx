import styles from './Introduction.module.css';

function Introducion() {
  return (
    <div className={styles.IntroductionContainer}>
      <div>
        <h1 className={`${styles.title}`}>Desenvolvedor <span className='active'>FullStack</span>_</h1>
        <p className={styles.content}>Sou desenvolvedor fullstack MERN stack e um pouco de UI&UX.</p>
      </div>
      <div>
        <div className={styles.svgIconsSocialMedia}>
          
        </div>
        <span>Sobre Mim </span>
      </div>
    </div>
  )
}

export default Introducion