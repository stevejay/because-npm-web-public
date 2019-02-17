import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

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

const Button = ({ type, className = "", onClick, children }: Props) => {
  const buttonClass = classNames(styles.button, styles[type], className);
  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
