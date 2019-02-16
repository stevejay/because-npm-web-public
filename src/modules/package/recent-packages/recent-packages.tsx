import { isEmpty } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./recent-packages.module.scss";

type Props = {
  packages: string[] | null;
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const RecentPackages = ({ packages, onLinkClick }: Props) => {
  const filteredPackages = (packages || []).slice(1);
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Recently Viewed</h2>
      {isEmpty(filteredPackages) && <p>No recent packages</p>}
      {!isEmpty(filteredPackages) && (
        <ul className={styles.list}>
          {filteredPackages.map(nodeId => (
            <li key={nodeId} className={styles.listItem}>
              <Link to={`/package/${nodeId}`} onClick={onLinkClick}>
                {nodeId}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RecentPackages;
