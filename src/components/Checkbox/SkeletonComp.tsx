import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Skeleton: React.FC<IContentLoaderProps> = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="55" y="4" rx="5" ry="5" width="200" height="22" />
    <rect x="24" y="4" rx="5" ry="5" width="22" height="22" />
    <rect x="55" y="36" rx="5" ry="5" width="145" height="22" />
    <rect x="24" y="36" rx="5" ry="5" width="22" height="22" />
    <rect x="55" y="66" rx="5" ry="5" width="169" height="22" />
    <rect x="24" y="68" rx="5" ry="5" width="22" height="22" />
    <rect x="55" y="98" rx="5" ry="5" width="200" height="22" />
    <rect x="24" y="98" rx="5" ry="5" width="22" height="22" />
  </ContentLoader>
);

export default Skeleton;
