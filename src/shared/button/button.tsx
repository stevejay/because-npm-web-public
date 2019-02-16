import React from "react";
import styles from "./button.module.scss";

export enum ButtonType {
  Primary = "primaryButton",
  Secondary = "secondaryButton"
}

type Props = {
  type: ButtonType;
  className?: string;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ type, className = "", onClick, children }: Props) => (
  <button
    className={`${styles.button} ${styles[type]} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
