import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const loadProduct = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  };

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  console.log("product", product);
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4  my-10">
        {/* images */}
        <div className=" md:col-span-7 border bg-amber-400">
          <img src={product?.thumbnail} alt={product?.title} />
        </div>
        {/* information */}
        <div className=" md:col-span-5 border">
          <h1>{product?.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
