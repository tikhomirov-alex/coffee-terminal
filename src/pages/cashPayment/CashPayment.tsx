import React, { useEffect, useState } from "react";
import emulator from "../../emulator";
import styles from "./CashPayment.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const CashPayment: React.FC = () => {
  const location = useLocation();
  const { price } = location.state || { price: undefined };
  const navigate = useNavigate();

  const [sum, setSum] = useState<number>(0);

  const cashinCallback = (amount: number) => {
    alert(`Вы внесли: ${amount} рублей`);
  };

  useEffect(() => {
    emulator.StartCashin(cashinCallback);

    return () => {
      emulator.StopCashin();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "KeyD") {
        const amount = parseInt(prompt("Введите сумму наличных:") || "0", 10);
        if (!isNaN(amount)) {
          setSum((prev) => {
            const newSum = prev + amount;
            cashinCallback(amount);

            if (newSum >= price) {
              emulator.StopCashin();
              setTimeout(() => { navigate("/drink") }, 2500);
            }
            return newSum;
          });
        } else {
          alert("Некорректная сумма!");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [price, navigate]);

  return (
    <div className={styles.container}>
      <h1>Оплата наличными</h1>
      <p className={styles.info}>
        Нажмите клавишу "D" для ввода суммы наличных.
      </p>

      <div className={styles.cashInfo}>
        <p>К оплате: {price || 0}₽</p>
        <p>Внесено: {sum}₽</p>
        {sum < price ? (
          <p>Не хватает: {price - sum}₽</p>
        ) : (
          <p>Сдача: {sum - price || 0}₽</p>
        )}
      </div>
    </div>
  );
};

export default CashPayment;
