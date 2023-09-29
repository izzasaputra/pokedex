import Image from "next/image";
import lodingIcon from "../../public/loading2.gif";
const LoadingState = () => (
  <div>
    <Image src={lodingIcon} alt="loading-icon" width={200} />
  </div>
);
export default LoadingState;
