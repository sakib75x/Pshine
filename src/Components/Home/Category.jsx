import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";

export default function Category({ categories }) {
  console.log("categories", categories);
  return (
    <div className=" max-w-7xl mx-auto">
      <h2 className=" text-2xl  my-5 font-semibold  ">Categories</h2>
      <div className=" w-full flex flex-wrap justify-center gap-4">
        {categories?.map((item) => {
          return <CategoryCard data={item} />;
        })}
      </div>
    </div>
  );
}
