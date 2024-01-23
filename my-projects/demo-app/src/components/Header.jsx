import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 py-2 px-20 flex justify-between items-center shadow-lg bg-sky-950">
      <div>
        <Link className="text-2xl text-white font-semibold" to="/">
          #logo
        </Link>
      </div>
      <div className="h-full flex items-center gap-12 text-sky-200 font-small">
        {/* all links to different routes */}
        <Link
          className="hover:text-white transition-all duration-400"
          to="/products"
        >
          Products
        </Link>
        <Link
          className="hover:text-white transition-all duration-400"
          to="/about"
        >
          About
        </Link>
        <Link
          className="hover:text-white transition-all duration-400"
          to="/contacts"
        >
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Header;
