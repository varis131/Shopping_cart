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
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={`${post.image}`} alt="product" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {cart.some((p) => p.id === post.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
