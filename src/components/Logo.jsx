import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

const Logo = () => {
  return (
    <Link
      to={"https://chaicode.com"}
      target="_blank"
      className="w-full flex justify-end items-end"
    >
      <img src={logo} alt="Logo" height={75} width={75} />
    </Link>
  );
};

export default Logo;
