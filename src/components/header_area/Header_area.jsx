
import Logo from "./Logo";
import Navbar from "./Navbar";
import CTA from "./CTA";

const Header_area = () => {
  return (
    <header className="w-full bg-indigo-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Logo />
        <Navbar />
        <CTA />
      </div>
    </header>
  );
};

export default Header_area;