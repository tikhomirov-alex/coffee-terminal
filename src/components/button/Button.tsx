import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = "#3498db",
  textColor = "#fff",
  onClick,
}) => {
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
