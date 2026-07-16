import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Slider() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=5").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-[70vh]"
      >
        {products?.map((item) => {
          return (
            <SwiperSlide>
              <div className=" bg-gray-300 grid grid-cols-2 items-center h-full ">
                <div className=" flex flex-col items-center">
                  <h2 className=" max-w-xl text-center text-5xl font-bold">
                    {item?.title}
                  </h2>
                  <p className=" max-w-md mt-3 text-sm">{item?.description}</p>
                  <button className=" text-base mt-4 bg-blue-500 px-4 py-2 rounded text-white">
                    Shop Now
                  </button>
                </div>
                <div>
                  <img className="" src={item?.thumbnail} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
