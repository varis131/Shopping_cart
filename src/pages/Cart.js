import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      {cart.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT → Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />
            ))}
          </div>

          {/* RIGHT → Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-fit sticky top-24">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-4">
              <span>Total Amount</span>
              <span className="font-bold text-green-600">
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        /* EMPTY CART */
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">
            Your cart is empty 🛒
          </h1>
          <Link to="/">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
