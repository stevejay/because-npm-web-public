import * as React from "react";
import styles from "./button.css";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary"
}

interface IProps {
  type: ButtonType;
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ type, className, onClick, children }: IProps) => (
  <button
    className={`${styles.button} ${styles[type]} ${className || ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
