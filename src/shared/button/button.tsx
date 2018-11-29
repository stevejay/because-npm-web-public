import * as React from "react";
import styles from "./button.css";

export enum ButtonType {
  Primary = "primary-button",
  Secondary = "secondary-button"
}

interface IProps {
  type: ButtonType;
  className?: string;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ type, className = "", onClick, children }: IProps) => (
  <button
    className={`${styles.button} ${styles[type]} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
