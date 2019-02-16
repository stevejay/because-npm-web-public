import React from "react";
import { IconType } from "react-icons/lib/iconBase";
import styles from "./icon-button.module.scss";

type EventHandler = (event?: React.MouseEvent<HTMLButtonElement>) => void;
type EventCallback = () => void;

type Props = {
  ariaLabel: string;
  icon: IconType;
  type?: string;
  onClick?: EventHandler | EventCallback;
};

const IconButton = ({
  ariaLabel,
  type = "button",
  icon: Icon,
  onClick
}: Props) => (
  <button
    className={styles.button}
    aria-label={ariaLabel}
    onClick={onClick}
    type={type}
  >
    <Icon />
  </button>
);

export default IconButton;
