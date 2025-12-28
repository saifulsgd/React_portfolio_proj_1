
import logoImg from "C:/Users/saiful/Desktop/React/react project/my_react_app/src/assets/images/e-logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logoImg}
        alt="Logo"
        className="h-10 w-auto object-contain"
      />
      <span className="text-xl font-bold text-gray-800">
        MyBrand
      </span>
    </div>
  );
};

export default Logo;