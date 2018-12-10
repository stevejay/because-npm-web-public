import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./recent-packages.module.scss";

interface IProps {
  packages: string[] | null;
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const RecentPackages: React.SFC<IProps> = ({ packages, onLinkClick }) => (
  <aside className={styles.container}>
    <h2 className={styles.header}>Recently Viewed</h2>
    <ul className={styles.list}>
      {(packages || []).map(nodeId => (
        <li key={nodeId} className={styles.listItem}>
          <Link to={`/package/${nodeId}`} onClick={onLinkClick}>
            {nodeId}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);

export default RecentPackages;
