import Image from "next/image";
import errorIcon from "../../public/not-found-image2.png";
const NotFound = () => (
  <div>
    <Image src={errorIcon} alt="error-icon" width={200} />
    <h2 style={{ textAlign: "center" }}>Not Found</h2>
  </div>
);
export default NotFound;
