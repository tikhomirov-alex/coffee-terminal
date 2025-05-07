import styles from "./CardPaymentError.module.scss";
import error from "../../assets/payment/error.png";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

export const CardPaymentError = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <img src={error} />
        <p>Оплата не прошла</p>
      </div>
      <div className={styles.actions}>
        <Button
          text="Попробовать ещё раз"
          backgroundColor="#FFF"
          textColor="#F03B3B"
          onClick={() => {
            navigate("/card");
          }}
        />
        <Button
          text="Отмена"
          backgroundColor="#F03B3B"
          textColor="#FFF"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};
