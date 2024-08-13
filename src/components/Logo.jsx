import logo from "/assets/logo.png";

const Logo = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <img src={logo} alt="Logo" height={75} width={75} />
    </div>
  );
};

export default Logo;
