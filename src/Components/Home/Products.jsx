import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products({ categories }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const all = { name: "All Products", slug: "all" };
  const allCategory = [all, ...categories];
  console.log("allCategory", allCategory);

  const URL =
    selectedCategory === "all"
      ? "https://dummyjson.com/products/?limit=9"
      : `https://dummyjson.com/products/category/${selectedCategory}`;
  const loadProducts = () => {
    axios.get(URL).then((res) => {
      setProducts(res.data.products);
    });
  };
  useEffect(() => {
    loadProducts();
  }, [selectedCategory]);

  const handleCategory = (item) => {
    setSelectedCategory(item);
  };
  const handleDelete = (id) => {
    console.log("handleDelete", id);

    axios
      .delete(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  console.log(selectedCategory);
  return (
    <div className=" max-w-7xl mx-auto">
      <h2 className=" mt-10 text-2xl font-bold text-center">Our Producs</h2>
      <div className="flex my-4 justify-center items-center gap-4">
        {allCategory?.slice(0, 4)?.map((item) => {
          return (
            <button
              onClick={() => handleCategory(item?.slug)}
              className={`hover:text-green-500 hover:cursor-pointer ${selectedCategory === item.slug && "text-green-500"}`}
            >
              <p className=" text-lg  font-semibold text-center">
                {item?.name}
              </p>
            </button>
          );
        })}
      </div>

      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((item) => {
          return (
            <ProductCard
              isDelete={true}
              handleDelete={handleDelete}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
}
