import React, { useContext } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { CartContext } from "../../App";
import { toast } from "sonner";
export default function ProductCard({
  isFeatured = false,
  data,
  handleDelete,
  isDelete = false,
}) {
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (item) => {
    const restCart = cart.filter((cartItem) => cartItem.id !== item.id);
    const uniqueCart = cart.find((cartItem) => cartItem.id === item.id);
    if (uniqueCart) {
      uniqueCart.quantity = uniqueCart.quantity + 1;
      setCart([uniqueCart, ...restCart]);
      toast.success("Product Quantity updated in cart");
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
      toast.success("Product added to cart");
    }
  };
  return (
    <div className=" border border-gray-100 rounded ">
      <div className=" relative">
        <img
          className="  rounded-2xl h-[312px] w-[312px]"
          src={data?.thumbnail}
          alt=""
        />
        {isFeatured && (
          <button className=" absolute top-3 left-3 bg-green-200 px-2 py-1 rounded">
            New
          </button>
        )}
        {isFeatured && (
          <button>
            <Heart className=" absolute top-3 right-3" />
          </button>
        )}
      </div>

      <div className=" border-t border-gray-100 py-2 px-4  flex justify-between items-center">
        <Link to={`/products/${data?.id}`}>
          <h2 className=" text-lg font-semibold text-green-500">
            {data?.title}
          </h2>
          <p className=" font-bold">${data?.price}</p>
        </Link>
        <button
          onClick={() => handleAddToCart(data)}
          className=" bg-green-400 text-white p-2 rounded"
        >
          <ShoppingCart />
        </button>
        {isDelete && (
          <button
            onClick={() => handleDelete(data.id)}
            className=" bg-green-400 text-white p-2 rounded"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
