import React from 'react';
import './index.css';
import { BrowserRouter as Router,  Routes,  Route,  } from "react-router-dom";
import Home from './component/Home';
import NotFound from './component/NotFound';
import Header from './component/Header';
import Footer from './component/Footer';
import Cart from './component/Cart';
import {CartProvider} from "./component/CartContext";
import Checkout from './component/Checkout';
import OrderConfirmation from './component/OrderConfirmation';
import Contact from './component/Contact';
import Favorites from './component/Favorites';
import TermsOfService from './component/TermsOfService';


function App() {
  return (
    <div className='App'>
      <CartProvider>
        <Router>
          <Header />
            <div className='justify-between max-w-screen-lg mx-auto min-h-[60vh]'>
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/termsofservice" element={<TermsOfService />} />
              </Routes>
            </div>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;