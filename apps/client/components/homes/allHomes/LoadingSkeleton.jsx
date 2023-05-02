import ContentLoader from "react-content-loader";
import { v4 as uuidv4 } from "uuid";
const LoadingSkeleton = () => {
  return Array.from({ length: 9 }).map((_, i) => (
    <ContentLoader key={uuidv4()} viewBox="0 0 500 280" height={430} width={445}>
      <rect x="50" y="3" rx="10" ry="10" width="390" height="180" />
      <rect x="55" y="190" rx="0" ry="0" width="292" height="20" />
      <rect x="65" y="215" rx="0" ry="0" width="239" height="20" />
      <rect x="65" y="242" rx="0" ry="0" width="274" height="20" />
    </ContentLoader>
  ));
};
export default LoadingSkeleton;
