import styles from './Finish.module.scss';
import finishImg from '../../assets/finish/finish.png';

export const Finish = () => {
  return (
    <div className={styles.container}>
      <img src={finishImg} />
      <p className={styles.textReady}>Напиток готов!</p>
      <p className={styles.finishText}>Вы можете забрать его</p>
    </div>
  )
}