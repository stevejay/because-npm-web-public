import * as React from "react";
import styles from "./menu.css";

const Menu: React.SFC<any> = props => (
  <ul {...props} className={`${styles.menu}`} ref={props.innerRef} />
);

export default Menu;
