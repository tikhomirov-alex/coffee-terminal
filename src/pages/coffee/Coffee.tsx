import React, { useEffect, useState, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Coffee.module.scss";
import { SwipeableButton } from "react-swipeable-button";
import { Arrow } from "../../components/Arrow";
import coffee from "../../assets/coffee/coffee-tab.png";
import tea from "../../assets/coffee/tea-tab.png";
import milkshake from "../../assets/coffee/milkshake-tab.png";
import soda from "../../assets/coffee/soda-tab.png";
import type { Drink } from "../../types";
import DrinkCard from "../../components/drinkCard/DrinkCard";

export const Coffee: React.FC = () => {
  const navigate = useNavigate();

  const [tab, setTab] = useState<number>(0);
  const [data, setData] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/drinks.json");
        const drinks = await response.json();
        setData(drinks);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  const tabs: {
    title: string;
    img: string;
    primaryColor: CSSProperties["color"];
    secondaryColor: CSSProperties["color"];
  }[] = [
    {
      title: "Кофе",
      img: coffee,
      primaryColor: "#EFCCB9",
      secondaryColor: "#FFE7DB",
    },
    {
      title: "Чай",
      img: tea,
      primaryColor: "#C9EA94",
      secondaryColor: "#DEF8B7",
    },
    {
      title: "Молочный коктейль",
      img: milkshake,
      primaryColor: "#F9ECD2",
      secondaryColor: "#FFF7E8",
    },
    {
      title: "Морсы и газ. напитки",
      img: soda,
      primaryColor: "#FFE665",
      secondaryColor: "#FFEF9A",
    },
  ];

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: tabs[tab]["primaryColor"] }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Выбор напитка</h1>
        <SwipeableButton
          noAnimate={true}
          width={400}
          height={70}
          background_color="white"
          textColor="black"
          onSuccess={() => {
            navigate("/auth");
          }}
          sliderColor="yellow"
          sliderIconColor="black"
          sliderTextColor="black"
          buttonChildren={
            <p className={styles.sliderBtn}>Вход / регистрация</p>
          }
        />
      </div>

      <div className={styles.tabs}>
        {tabs.map((item, index) => (
          <div
            key={index}
            className={`${styles.tab} ${tab === index ? styles.active : ""}`}
            onClick={() => setTab(index)}
          >
            <div
              className={styles.circle}
              style={{ backgroundColor: item.primaryColor }}
            >
              <img className={styles.tabImg} src={item.img} />
            </div>
            <div className={styles.tabText}>{item.title}</div>
          </div>
        ))}
      </div>

      <div className={styles.products}>
        <div className={styles.productsTitle}>
          <div
            className={styles.circle}
            style={{
              backgroundColor: tabs[tab]["primaryColor"],
              marginLeft: "-30px",
            }}
          ></div>
          <p>{tabs[tab].title}</p>
        </div>
        <div className={styles.productsGrid}>
          {data
            .filter((d) => d.type === tab)
            .map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
        </div>
      </div>
      <Arrow
        position="absolute"
        width={"450px"}
        height={"940px"}
        top={"-330px"}
        left={"565px"}
        color={tabs[tab]["secondaryColor"]}
        zIndex={0}
      />
    </div>
  );
};
