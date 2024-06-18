import React, { useState } from "react";
import Itemcard from "./Itemcard";
import data from "./data/data";

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredItems = activeTab === "all"
    ? data.productData
    : data.productData.filter(item => item.category === activeTab);

  return (
    <>
      {/* <h1 className="text-center mt-3">All Items</h1> */}
      <div className="flex justify-center mt-4 border-b border-gray-800">
        <button
          className={`px-4 py-2 mx-2 rounded-t-lg ${activeTab === "all" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
          onClick={() => handleTabClick("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-t-lg ${activeTab === "tops" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
          onClick={() => handleTabClick("tops")}
        >
          Tops
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-t-lg ${activeTab === "bottoms" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
          onClick={() => handleTabClick("bottoms")}
        >
          Bottoms
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-t-lg ${activeTab === "goods" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
          onClick={() => handleTabClick("goods")}
        >
          Goods
        </button>
      </div>
      <section className="py-4 mx-auto max-w-7xl min-w-5xl md:w-5/6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          {filteredItems.map((item, index) => (
            <Itemcard 
              img={item.img} 
              title={item.title} 
              desc={item.desc} 
              price={item.price} 
              item={item} 
              key={index} 
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
