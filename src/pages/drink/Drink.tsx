import styles from "./Drink.module.scss";
import { getRandomTime, formatTime } from "../../utils";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";

export const Drink = () => {
  const time = getRandomTime();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={time}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
        size={700}
        onComplete={() => { navigate('/finish') }}
      >
        {({ remainingTime }) => (
          <div className={styles.timerInfo}>
            <div className={styles.timer}>{formatTime(remainingTime)}</div>
            <p>Приготовление напитка</p>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
};
