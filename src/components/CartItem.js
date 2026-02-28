import React from "react";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex items-center gap-6 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {item.title}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {item.description}
        </p>
      </div>

      {/* Price + Delete */}
      <div className="flex flex-col items-end gap-4">
        <p className="text-lg font-bold text-green-600">${item.price}</p>

        <button
          onClick={removeFromCart}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <AiFillDelete size={22} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
