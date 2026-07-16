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
            <SwiperSlide key={item?.id}>
              <div className="bg-[#f4f4f5] grid grid-cols-2 items-center h-full">
                <div className="pl-16 md:pl-24 lg:pl-32 pr-8 flex flex-col items-start text-left">
                  <h2 className="text-5xl lg:text-6xl font-light text-slate-900 tracking-wide mb-6">
                    {item?.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed max-w-md mb-8">
                    {item?.description}
                  </p>
                  <button className="flex items-center gap-2 bg-[#1e2832] text-white px-6 py-3 rounded-none hover:bg-slate-800 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span>Shop Now</span>
                  </button>
                </div>
                <div className="relative flex justify-center items-center h-full pr-16 md:pr-24 lg:pr-32">
                  <div className="relative w-[70%] h-[75%] max-w-[320px] max-h-[380px] aspect-[3/4]">
                    {/* Decorative offset outer border */}
                    <div className="absolute inset-0 border-2 border-[#1e2832]/20 rounded-tl-[120px] rounded-br-[120px] translate-x-4 translate-y-4 pointer-events-none"></div>
                    {/* Image frame */}
                    <div className="relative w-full h-full overflow-hidden rounded-tl-[120px] rounded-br-[120px] bg-slate-200">
                      <img
                        className="object-cover w-full h-full"
                        src={item?.thumbnail}
                        alt={item?.title || "Product image"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
