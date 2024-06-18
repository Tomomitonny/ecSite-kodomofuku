import React, { useState, useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { FaTrashAlt } from "react-icons/fa";



const Header = () => {
  const [isCartHovered, setIsCartHovered] = useState(false);
  const { cart, updateItemQuantity, removeItem, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  const getLinkClass = (path) => {
    return `flex items-center px-4 -mb-1 border-b-2 transition-colors duration-300 ease-in-out ${
      location.pathname === path ? 'text-orange-500 border-orange-500' : 'text-gray-700 hover:text-orange-500 hover:border-orange-500'
    }`;
  };

  return (
    <>
      <header className="justify-between max-w-screen-xl mx-auto py-5 text-center">
        <div className="site-title">
          <h1>
            <a href="/">
              <img 
                src="sample_logo.png" 
                alt="サイトのロゴ" 
                className="w-1/3"
              />
            </a>
          </h1>
        </div>
        <div className="p-4 dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex justify-between h-8 mx-auto text-gray-900 text-sm">
            <ul className="items-stretch hidden space-x-1 lg:flex">
              <li className="flex">
                <Link to="/" className={getLinkClass('/')}>
                  SHOP
                </Link>
              </li>
              <li className="flex">
                <a href="#" className={getLinkClass('#')}>
                  LOOK BOOK
                </a>
              </li>
              <li className="flex">
                <a href="#" className={getLinkClass('#')}>
                  MEDIA
                </a>
              </li>
              <li className="flex">
                <a href="#" className={getLinkClass('#')}>
                  EVENT
                </a>
              </li>
              <li className="flex">
                <Link to="/contact" className={getLinkClass('/contact')}>
                  CONTACT
                </Link>
              </li>
            </ul>		
            <div className="flex items-center md:space-x-4">
              <div
                className="relative"
                onMouseEnter={() => setIsCartHovered(true)}
                onMouseLeave={() => setIsCartHovered(false)}
              >
                <Link 
                  to="/cart"
                  className={`hidden px-1 text-3xl lg:block transition duration-1000 hover:scale-150`}
                >
                  <FaShoppingCart />
                </Link>
                {isCartHovered && (
                  <div className="z-50 absolute -right-20 w-80 p-2 bg-white border border-gray-200 shadow-lg rounded-xl">
                    <p className="text-left text-lg">カート({cart.length})</p>
                    {cart.length > 0 ? (
                      <ul className="max-h-[80vh] overflow-y-auto divide-y divide-gray-300">												
                        {cart.map((item, index) => (
                          <li key={index} className="flex items-center justify-between m-1 ">
                            <div className='flex mx-1 py-6 w-full'>
                              <div className=''>
                                <img
                                  className='rounded-lg '
                                  src={item.img}
                                  style={{ width: '6rem' }}
                                  alt={item.title}
                                />
                              </div>
                              <div className='w-full pl-4'>
                                <div className='flex justify-between text-left'>
                                  <div>
                                    <div>{item.title}</div>
                                    <div className='font-extralight'>¥{item.price * item.quantity}</div>
                                  </div>
                                </div>
                                <div className='flex justify-between mt-6'>
                                  <div className='flex justify-between items-center'>
                                    <button
                                      className={`p-1.5 rounded-full ${item.quantity === 1 ? 'border  cursor-not-allowed' : 'bg-gray-200'}`}
                                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                      disabled={item.quantity === 1}
                                    >
                                      <svg width="16" height="16" viewBox="0 0 17 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="17" y2="0.5" stroke="black"/>
                                      </svg>
                                    </button>
                                    <p className='mx-4'>{item.quantity}</p>                        
                                    <button
                                      className="p-1.5 bg-gray-300 rounded-full border"
                                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    >
                                      <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="8.5" x2="17" y2="8.5" stroke="black"/>
                                        <line x1="8.5" y1="-2.18557e-08" x2="8.5" y2="17" stroke="black"/>
                                      </svg>
                                    </button>
                                  </div>
                                  <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>
                                    <FaTrashAlt />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                        <div className="inline-flex items-center px-10 mb-4 bg-gray-700 text-white border border-black rounded-full shadow-xl hover:bg-gray-600">
                          <button className="btn btn-primary m-2" onClick={handleBuyNow}>
                            会計へ進む
                          </button>
                          <h2>合計: {cartTotal}</h2>
                        </div>
                      </ul>
                    ) : (
                      <p>カートに商品がありません。</p>
                    )}
                  </div>
                )}
              </div>
              <Link
                to={'/favorites'}
                className={`hidden px-1 text-3xl lg:block transition duration-1000 hover:scale-150`}
              >
                <FaHeart />
              </Link>
            </div>
            <button title="Open menu" type="button" className="p-4 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
