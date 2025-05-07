import React, { useEffect, useState } from "react";
import emulator from "../../emulator";
import styles from "./CardPayment.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const CardPayment: React.FC = () => {
  const location = useLocation();
  const { price } = location.state || { price: undefined };
  const navigate = useNavigate();

  const [paymentState, setPaymentState] = useState<string>('');

  const bankCardCallback = (result: boolean) => {
    alert(
      result ? "Оплата прошла успешно!" : "Ошибка оплаты. Попробуйте снова."
    );
    if (result) {
      setTimeout(() => { navigate("/drink") }, 2500);
    }
  };

  const displayCallback = (message: string) => {
    setPaymentState(message);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "KeyP") {
        emulator.BankCardPurchase(price, bankCardCallback, displayCallback);
      } else if (event.code === "KeyE") {
        navigate("/cardError", { state: { price } });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <h1>Оплата картой</h1>
      <p>Нажмите "P" для успешной оплаты, "E" для ошибки оплаты.</p>
      <p>{paymentState}</p>
    </div>
  );
};

export default CardPayment;
