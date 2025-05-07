import styles from './Home.module.scss';

import cup1 from '../../assets/home/cup1.png';
import cup2 from '../../assets/home/cup2.png';
import seed1 from '../../assets/home/seed1.png';
import seed2 from '../../assets/home/seed2.png';
import seed3 from '../../assets/home/seed3.png';
import seed4 from '../../assets/home/seed4.png';
import seed5 from '../../assets/home/seed5.png';
import seed6 from '../../assets/home/seed6.png';

import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToCoffeeScreen = () => {
    navigate('/coffee');
  }
  
  return (
    <div className={styles.container} onClick={goToCoffeeScreen}>
      <p className={styles.coffeeText}>Это твой кофе</p>
      <div className={styles.ellipse}></div>
      <div className={styles.ellipseTextContainer}>
        <p className={styles.ellipseText}>Коснитесь</p>
        <p className={styles.ellipseText}>экрана</p>
      </div>

      <img className={styles.seed1} src={seed1} />
      <img className={styles.seed2} src={seed2} />
      <img className={styles.seed3} src={seed3} />
      <img className={styles.seed4} src={seed4} />
      <img className={styles.seed5} src={seed5} />
      <img className={styles.seed6} src={seed6} />

      <img className={styles.cup1} src={cup1} />
      <img className={styles.cup2} src={cup2} />
    </div>
  );
};
