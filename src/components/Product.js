import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, add } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  return (
    <div className="group flex flex-col justify-between bg-white mt-4
    rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 
    ease-in-out transform hover:-translate-y-1  bg-gradient-to-br from-slate-50
     via-gray-100 to-slate-200 py-10 px-6">
      
      {/* Image */}
      <div className="h-48 flex items-center justify-center mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
        {post.title}
      </h2>

      {/* Description */}
      <p className="text-xs text-gray-500 mb-3">
        {post.description.split(" ").slice(0, 10).join(" ")}...
      </p>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-auto">
        <p className="text-lg font-bold text-green-600">
          ${post.price}
        </p>

        {cart.some((p) => p.id === post.id) ? (
          <button
            onClick={removeFromCart}
            className="text-sm px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="text-sm px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
