import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Payment.module.scss";
import cash from "../../assets/payment/cash.png";
import card from "../../assets/payment/card.png";

export const Payment = () => {
  const location = useLocation();
  const { price } = location.state || { price: undefined };

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>К оплате: {price} ₽</p>
        <p>Выберите способ оплаты:</p>
      </div>
      <div className={styles.imgContainer}>
        <div
          className={styles.imgBox}
          onClick={() => navigate("/cash", { state: { price } })}
        >
          <img className={styles.img} src={cash} />
        </div>
        <div
          className={styles.imgBox}
          onClick={() => navigate("/card", { state: { price } })}
        >
          <img className={styles.img} src={card} />
        </div>
      </div>
    </div>
  );
};
