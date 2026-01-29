import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
    } catch (error) {
      console.log("error aa gaya jii");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-6">
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <Spinner />
        </div>
        
      ) : posts.length > 0 ? (
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => {
           return <Product key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Post found !!</p>
        </div>
      )}
    </div>
  );
};
export default Home;
