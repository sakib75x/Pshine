import { LucideHeart, LucideMove, ShoppingBag, User2, Search } from "lucide-react";
import React, { useContext } from "react";
import { CartContext } from "../../App";
import { Link } from "react-router";

export default function Topbar() {
  const [cart] = useContext(CartContext);
  console.log("====================================");
  console.log("cart", cart);
  console.log("====================================");
  // const cart = localStorage.getItem("cart");
  // const cardData = JSON.parse(cart) || [];

  return (
    <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-slate-200/80 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative min-h-[40px]">
        {/* Left: Minimized Search Icon */}
        <div className="flex items-center">
          <button 
            type="button" 
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Center: Brand Text/Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img className="w-8 h-8 object-contain" src="/images/logo.png" alt="Pshine logo" />
            <h3 className="text-slate-800 text-xl font-bold tracking-tight">Pshine</h3>
          </Link>
        </div>

        {/* Right: Cart, Wishlist, Profile */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-slate-100/85 hover:bg-slate-200/85 text-slate-700 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
          >
            <ShoppingBag className="w-4 h-4 text-slate-600" />
            <span>cart {cart?.length > 0 && cart?.length}</span>
          </Link>

          {/* Wishlist */}
          <div className="flex items-center gap-2 bg-slate-100/85 hover:bg-slate-200/85 text-slate-700 px-3.5 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200">
            <LucideHeart className="w-4 h-4 text-slate-600" />
            <span>Wishlist</span>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 bg-slate-100/85 hover:bg-slate-200/85 text-slate-700 px-3.5 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200">
            <User2 className="w-4 h-4 text-slate-600" />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
