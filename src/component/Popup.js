import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { FaHeart } from "react-icons/fa";


const convertNewlinesToBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};


const Popup = ({ item, onClose }) => {
  const { addItem } = useContext(CartContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(item.id));
  }, [item.id]);

  const handleAddToCart = () => {
    if (item.id && item.title && item.price && item.img) {
      addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
        desc: item.desc,
        quantity: 1,
      });
      console.log("Item added to cart:", item); // デバッグ用
      onClose();
    } else {
      console.error("Missing item properties", item);
    }
  };

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const newFavorites = favorites.filter(favId => favId !== item.id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      localStorage.removeItem(`item_${item.id}`);
    } else {
      favorites.push(item.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      localStorage.setItem(`item_${item.id}`, JSON.stringify(item));
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="fixed py-8 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-11/12 md:w-1/2 overflow-y-auto max-h-full pb-20">
        <img src={item.img} alt={item.title} className="w-full object-cover rounded-t-md" />
        <div className="p-6 font-extralight">
          <h2 className="text-2xl font-light mt-4">{item.title}</h2>
          <p className="text-lg font-light mt-3">¥{item.price}</p>
          <p className="mt-4 tracking-wide leading-loose">{convertNewlinesToBreaks(item.desc)}</p>
        </div>
        <div className="max-w-2xl w-11/12 md:w-1/2 mb-8 flex justify-between px-10 py-4 absolute bottom-0">
          <button
            className="rounded-full bg-gray-200 hover:bg-gray-400 hover:text-white h-14 text-gray-600 w-1/6 text-2xl flex items-center justify-center"
            onClick={onClose}
          >
            &times;
          </button>
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white h-14 rounded-full font-semibold tracking-widest w-3/4 flex items-center justify-center"
            onClick={handleAddToCart}
          >
            カートに追加する
          </button>
        </div>
        <button
          className={`absolute top-10 rounded-full text-2xl p-3 ml-2 ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? '♡' : '♡'}
        </button>
      </div>
    </div>
  );
};

export default Popup;
