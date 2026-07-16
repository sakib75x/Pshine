import React, { useContext, useEffect, useState } from "react";
import Slider from "../Common/Slider";
import Featured from "./Featured";
import CategoryCard from "./CategoryCard";
import Category from "./Category";
import Products from "./Products";
import axios from "axios";
import { AuthContext } from "../../App";

const Home = () => {
  const [user] = useContext(AuthContext)

  console.log("From JHome", user);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      setCategories(res.data?.slice(1, 6));
    });
  }, []);

  return (
    <div>
      <Slider />
      <Featured />
      <Category categories={categories} />
      <Products categories={categories} />
    </div>
  );
};

export default Home;
