import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function Featured() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=4").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 ">
      <h2 className=" text-2xl  my-5 font-semibold ">Featurd Products</h2>

      <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products?.map((item) => {
          return <ProductCard isFeatured={true} data={item} />;
        })}
      </div>
    </div>
  );
}
