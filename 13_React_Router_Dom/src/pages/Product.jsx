import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link to="/product/men" className="text-xl font-semibold">
          Men's Collection
        </Link>
        <Link to="/product/women" className="text-xl font-semibold">
          Women's Collection
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Product;
