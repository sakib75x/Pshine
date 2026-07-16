import { ArrowRight } from "lucide-react";
import React from "react";

export default function CategoryCard({ data }) {
  return (
    <div className=" w-56 bg-gray-300 flex items-center justify-between border border-gray-100 p-4 rounded-full hover:border-green-400 ">
      <h3>{data?.name}</h3>
      <ArrowRight />
    </div>
  );
}
