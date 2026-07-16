import React from "react";
import { CartContext } from "../../App";
import { use } from "react";
const Cart = () => {
  const [cart, setCart] = use(CartContext);
  console.log("cart", cart);

  const handleRemoveFromCart = (item) => {
    console.log("remove item", item);
    const newCart = cart.filter((cart) => cart.id !== item);
    setCart(newCart);
  };
  const handleIncreaseQuantity = (item) => {
    const restCart = cart.filter((cartItem) => cartItem.id !== item.id);
    item.quantity = item.quantity + 1;
    setCart([item, ...restCart]);
  };
  const handleDecreaseQuantity = (item) => {
    const restCart = cart.filter((cartItem) => cartItem.id !== item.id);
    item.quantity = item.quantity - 1;
    setCart([item, ...restCart]);
  };
  if (cart.length === 0) {
    return (
      <h1 className=" text-3xl font-bold mb-5 text-center mt-10 h-screen">
        Your Cart is Empty
      </h1>
    );
  }

  return (
    <div className=" min-h-screen max-w-7xl mx-auto py-10">
      <h1 className=" text-3xl font-bold mb-5">Your Cart</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cart?.map((item) => (
          <div
            key={item.id}
            className=" bg-gray-200 border border-slate-200 rounded-md p-4 flex gap-4 items-center"
          >
            <div>
              <img src={item.thumbnail} alt={item.title} className=" w-32  " />
            </div>
            <div>
              <h2 className=" text-base font-semibold">{item.title}</h2>
              <p className=" text-lg font-bold">
                ${item.price.toFixed(2) * item?.quantity}
              </p>
              <div className=" flex items-center gap-2 mt-2">
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className=" text-lg bg-gray-500 px-3 text-white"
                >
                  -
                </button>
                <p className=" text-lg  px-3">{item.quantity}</p>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className=" text-lg bg-gray-500 px-3 text-white"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className=" bg-red-400 text-white px-3 py-1 rounded mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
