import * as React from "react";
import ContentLoader from "react-content-loader";

const PackageDetailLoader: React.SFC = () => (
  <ContentLoader
    height={25}
    width={310}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="310" height="8" />
    <rect x="0" y="16" rx="3" ry="3" width="300" height="8" />
  </ContentLoader>
);

export default PackageDetailLoader;
