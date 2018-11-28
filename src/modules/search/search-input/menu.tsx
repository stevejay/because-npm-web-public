import * as React from "react";
import styles from "./menu.css";

const Menu = (props: any) => (
  <ul {...props} className={`${styles.menu}`} ref={props.innerRef} />
); // TODO fix any

export default Menu;
