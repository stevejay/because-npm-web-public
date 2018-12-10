import * as React from "react";
import { IconType } from "react-icons/lib/iconBase";
import styles from "./button.module.scss";

type EventHandler = (event?: React.MouseEvent<HTMLButtonElement>) => void;
type EventCallback = () => void;

interface IProps {
  ariaLabel: string;
  icon: IconType;
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
