import * as React from "react";
import styles from "./button.css";

type EventHandler = (event?: React.MouseEvent<HTMLButtonElement>) => void;
type EventCallback = () => void;

interface IProps {
  ariaLabel: string;
  icon: any;
  type?: string;
  onClick?: EventHandler | EventCallback;
}

const Button: React.SFC<IProps> = ({
  ariaLabel,
  type = "button",
  icon: Icon,
  onClick
}) => (
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
