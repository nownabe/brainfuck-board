import { ThreeDots } from "react-loader-spinner";

import { grayDark } from "../../styles/color";

const Spinner = () => (
  <div className="navbar-item">
    <ThreeDots color={grayDark} height={40} width={40} />
  </div>
);

export default Spinner;
