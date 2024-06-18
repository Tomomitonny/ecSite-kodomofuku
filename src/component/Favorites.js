import React, { useEffect, useState } from "react";
import Itemcard from "./Itemcard";


const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoriteItems = favorites.map(favId => {
      
      return JSON.parse(localStorage.getItem(`item_${favId}`));
    });
    setFavoriteItems(favoriteItems);
  }, []);

  if (favoriteItems.length === 0) {
    return <p>お気に入りのアイテムがありません。</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-light mb-4">お気に入りに追加したアイテム</h2>
      <ul>
      <section className="py-4 mx-auto max-w-7xl min-w-5xl md:w-5/6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
        {favoriteItems.map((item, index) => {
          return (
            <Itemcard 
              img={item.img} 
              title={item.title} 
              desc={item.desc} 
              price={item.price} 
              item={item} 
              key={index} 
            />
          );
        })}
          </div>
        </section>
      </ul>
    </div>
  );
};

export default Favorites;
