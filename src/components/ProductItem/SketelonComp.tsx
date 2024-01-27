import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Skeleton: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={124}
    height={225}
    viewBox="0 0 124 225"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-3" y="2" rx="12" ry="12" width="124" height="124" />
    <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
    <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
    <rect x="2" y="190" rx="3" ry="3" width="112" height="19" />
    <rect x="265" y="191" rx="3" ry="3" width="37" height="11" />
    <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
    <rect x="1" y="162" rx="3" ry="3" width="100" height="21" />
    <rect x="1" y="137" rx="3" ry="3" width="70" height="15" />
  </ContentLoader>
);

export default Skeleton;
