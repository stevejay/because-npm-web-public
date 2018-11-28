import * as React from "react";
import styles from "./button.css";

interface IProps {
  ariaLabel: string;
  icon: any;
  type?: string;
  onClick?: () => void;
}

const Button = ({
  ariaLabel,
  type = "button",
  icon: Icon,
  onClick
}: IProps) => (
  <button
    className={styles.button}
    aria-label={ariaLabel}
    onClick={onClick}
    type={type}
  >
    <Icon />
  </button>
);

export default Button;
