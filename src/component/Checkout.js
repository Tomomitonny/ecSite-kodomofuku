import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData({
      ...checkoutData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // パスワードの一致を確認
    if (checkoutData.password !== checkoutData.confirmPassword) {
      alert('パスワードが一致しません');
      return;
    }

    // 仮の処理
    console.log('Checkout Data:', checkoutData);

    alert('入力情報を送信しました！');

    // Order Confirmationページに遷移
    navigate('/order-confirmation');
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div className='grid gap-6 mb-6 grid-cols-2"'>
        <div>
          <label 
            htmlFor="lastName" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            姓
          </label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Yamada" 
            value={checkoutData.lastName}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label 
            htmlFor="firstName" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            名
          </label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Taro" 
            value={checkoutData.firstName}
            onChange={handleChange}
            required 
          />
        </div>
        </div>
        <div>
          <label 
            htmlFor="phone" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            電話番号
          </label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="09012345678" 
            value={checkoutData.phone}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label 
            htmlFor="email" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            メールアドレス
          </label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="example@example.com" 
            value={checkoutData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label 
            htmlFor="cardNumber" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            カード番号
          </label>
          <input 
            type="text" 
            id="cardNumber" 
            name="cardNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="1234 5678 9012 3456" 
            value={checkoutData.cardNumber}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label 
            htmlFor="expiryDate" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            有効期限
          </label>
          <input 
            type="text" 
            id="expiryDate" 
            name="expiryDate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="MM/YY" 
            value={checkoutData.expiryDate}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label 
            htmlFor="cvv" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CVV
          </label>
          <input 
            type="text" 
            id="cvv" 
            name="cvv"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="123" 
            value={checkoutData.cvv}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label 
            htmlFor="password" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            パスワード
          </label>
          <input 
            type="password" 
            id="password" 
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={checkoutData.password}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label 
            htmlFor="confirmPassword" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            確認用パスワード
          </label>
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={checkoutData.confirmPassword}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          注文を確定する
        </button>
      </form>
    </div>
  );
};

export default Checkout;
