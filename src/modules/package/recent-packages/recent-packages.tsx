import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./recent-packages.css";

interface IProps {
  packages: string[] | null;
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const RecentPackages: React.SFC<IProps> = ({ packages, onLinkClick }) => (
  <aside className={styles.container}>
    <h2 className={styles.header}>Recently Viewed</h2>
    <ul className={styles.list}>
      {(packages || []).map(nodeName => (
        <li key={nodeName} className={styles.listItem}>
          <Link to={`/package/${nodeName}`} onClick={onLinkClick}>
            {nodeName}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);

export default RecentPackages;
