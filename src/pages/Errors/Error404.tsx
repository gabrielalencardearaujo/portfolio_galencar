import styles from './Error404.module.css';
import rickMorty from '../../assets/img/rick_morty.png'

function Error404() {
  return (
    <section className={styles.container}>
      <span>
        <h1 className={styles.title}>404</h1>
        <p className={styles.notFound}>Página não encontrada</p>
        <p className={styles.sub} title="">Porque este erro aconteceu?</p>
      </span>
      <img src={rickMorty} alt="Rick and Morty" />
    </section>
  );
}

export default Error404;
