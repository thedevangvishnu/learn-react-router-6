import { Outlet } from "react-router-dom";
import ProductsNav from "./ProductsNav";

const ProductsLayout = () => {
  return (
    <>
      <ProductsNav />
      <Outlet />
    </>
  );
};

export default ProductsLayout;
