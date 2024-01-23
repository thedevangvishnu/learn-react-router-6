import { Link } from "react-router-dom";

const ProductsNav = () => {
  return (
    <div className="w-9/12 h-20 mx-auto py-2 px-20 flex justify-between items-center shadow-lg bg-sky-400 mt-8 mb-6">
      <div className="h-full flex items-center gap-12 text-slate-800 font-small">
        {/* all links to different routes */}
        <Link
          className="hover:text-black transition-all duration-400"
          to="/products"
        >
          All Products
        </Link>
        <Link
          className="hover:text-black transition-all duration-400"
          to="/products/men"
        >
          Men
        </Link>
        <Link
          className="hover:text-black transition-all duration-400"
          to="/products/women"
        >
          Women
        </Link>
      </div>
    </div>
  );
};

export default ProductsNav;
