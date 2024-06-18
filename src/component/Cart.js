import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const {
    cart,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  if (isEmpty) return (
    <>
      <h1 className="text-center pt-20">カートに商品がありません。</h1>
      <Link
        to='/'
        className='flex mx-auto my-4 justify-center underline'
      >
         買い物を続ける
      </Link>
    </>
);

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <section className="max-w-2xl pl-6">
      <Link
        to='/'
        className='text-black'
      >
        買い物を続ける
      </Link>
      <div className="">
        <div className="">
          <h5 className='text-sm ml-3'>
             {totalUniqueItems} 商品 , 計 {totalItems} 点
          </h5>
          <div className="text-base">
            <div className='divide-y divide-gray-300'>
              {cart.map((item, index) => (
                <div key={index}>
                  <div className='flex py-6'>

                    <div className=''>
                      <img
                        className='rounded-lg '
                        src={item.img}
                        style={{ width: '6rem' }}
                        alt={item.title}
                        />
                    </div>

                    <div className='w-full pl-4'>
                      <div className='flex justify-between'>
                        <div>
                          <div>{item.title}</div>
                          <div className='font-extralight'>¥{item.price}</div>
                        </div>
                        <div>¥{item.price * item.quantity}</div>
                      </div>
                      <div className='flex justify-between mt-6'>
                        <div className='flex justify-between items-center'>
                          <button
                            className={`p-1.5 rounded-full ${item.quantity === 1 ? 'border  cursor-not-allowed' : 'bg-gray-200'}`}
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity === 1}
                          >
                            <svg width="16" height="16" viewBox="0 0 17 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <line y1="0.5" x2="16" y2="0.5" stroke='black' />
                            </svg>
                          </button>
                          <p className='mx-4'>{item.quantity}</p>                        
                          <button
                            className="p-1.5 bg-gray-200 rounded-full border"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <line y1="8.5" x2="17" y2="8.5" stroke="black"/>
                              <line x1="8.5" y1="-2.18557e-08" x2="8.5" y2="17" stroke="black"/>
                            </svg>
                          </button>
                        </div>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => removeItem(item.id)}
                          >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center bg-gray-700 text-white border border-black rounded-full px-20 shadow-xl hover:bg-gray-600">
            <button className="btn btn-primary m-2" onClick={handleBuyNow}>
              会計へ進む
            </button>
            <h2>合計: {cartTotal}</h2>
          </div>
          <button className="border border-black rounded-full m-2 px-4 py-2 bg-gray-100 hover:bg-white" onClick={emptyCart}>
            カートを空にする
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
