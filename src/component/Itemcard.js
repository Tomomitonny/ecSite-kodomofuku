import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import Popup from "./Popup";

const Itemcard = ({ item, img, title, price }) => {
  const { addItem } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
    } else {
      console.error("Missing item properties", item);
    }
  };

  return (
    <>
      <div className="relative max-w-xs rounded-lg shadow-md text-left">
        <div className="relative group" onClick={handleOpenPopup}>
          <img
            src={img}
            alt={title}
            className="object-cover object-center w-full rounded-t-lg transition-transform duration-300 group-hover:opacity-50 transition-opacity"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 rounded-t-md cursor-pointer">
          </div>
          <div className="truncate m-6 flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-l font-extralight tracking-wide">{title}</h2>
              <p className="">¥{price}</p>
            </div>
          </div>
        </div>
      </div>

      {showPopup && <Popup item={item} onClose={handleClosePopup} />}
    </>
  );
};

export default Itemcard;
