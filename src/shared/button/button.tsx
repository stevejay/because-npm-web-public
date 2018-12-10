import * as React from "react";
import styles from "./button.module.scss";

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

const Button: React.SFC<IProps> = ({
  type,
  className = "",
  onClick,
  children
}) => (
  <button
    className={`${styles.button} ${styles[type]} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
