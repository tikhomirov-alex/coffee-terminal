import React from 'react';
import type { Drink } from '../../types';
import { useNavigate } from 'react-router-dom';
import styles from './DrinkCard.module.scss';

interface DrinkCardProps {
  drink: Drink;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/payment', { state: { price: drink.price } });
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <img src={drink.img} className={styles.img} alt={drink.title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{drink.title}</h3>
        <p className={styles.price}>От <span>{drink.price}₽</span></p>
      </div>
    </div>
  );
};

export default DrinkCard;
