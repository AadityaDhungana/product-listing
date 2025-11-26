import { Link } from "react-router";
import { FiPackage, FiShoppingCart } from "react-icons/fi";
import ThemeSelector from "./ThemeSelector";

const Header = ({ onCartOpen }) => {
  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-base-100">
      <div className="w-full p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-2xl text-primary hover:text-primary/80 transition"
          >
            <FiPackage />
          </Link>

          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition"
          >
            Home
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSelector />

          <button
            className="text-xl hover:text-primary transition"
            onClick={onCartOpen}
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
