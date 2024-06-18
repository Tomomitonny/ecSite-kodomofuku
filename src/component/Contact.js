import React, { useState } from 'react';

const Contact = () => {
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 仮の処理
    console.log('Contact Data:', contactData);
    alert('お問い合わせ内容を送信しました！');

    // フォームをリセット
    setContactData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
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
            value={contactData.lastName}
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
            value={contactData.firstName}
            onChange={handleChange}
            required 
          />
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
            value={contactData.phone}
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
            value={contactData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label 
            htmlFor="message" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            メッセージ
          </label>
          <textarea 
            id="message" 
            name="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="お問い合わせ内容を入力してください" 
            value={contactData.message}
            onChange={handleChange}
            required 
          />
        </div>
          <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
              <input 
                id="remember" 
                type="checkbox" 
                value="" 
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
              </div>
              <label 
                for="remember" 
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >                
                <a href="/termsofservice" className="text-blue-600 hover:underline dark:text-blue-500">
                  利用規約
                </a>に同意する。
              </label>
          </div>
          <button 
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
      </form>

    </div>
  );
}

export default Contact;
