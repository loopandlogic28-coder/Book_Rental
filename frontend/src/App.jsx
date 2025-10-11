/*import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import { useState } from 'react'
import Chetan from './components/chetan/Chetan'
import Verify from './pages/Verify/Verify'
import FoodDetail from './components/ProductDetail/ProductDetails'
import ProductDetails from './components/ProductDetail/ProductDetails'
import ProductsYouMayLike from './components/ProductYouMayLike/ProductsYouMayLike'
import MyOrders from './pages/MyOrders/MyOrders'
import MoreDetails from './pages/MoreDetails/MoreDetails'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import AboutUs from './pages/AboutUs/AboutUs'


const App = () => {

  const[showLogin,setShowLogin] = useState(false)
  return (
  <>
  {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
   <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes> {/* Routes means page change hota hai na woh  .. and necessary thing browser import whihc is used in main.jsx  *//*}
    /*  <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order'element={<PlaceOrder/>} />
      <Route path='/chetan' element={<Chetan/>} />
      <Route path='/verify' element={<Verify/>} />
      <Route path='/myorders' element={<MyOrders/>} />
      
      <Route path='/product-detail/:id' element={<ProductDetails />} />
      <Route path='/productyoumaylike' element={<ProductsYouMayLike />} />
      <Route path='/moredetails' element={<MoreDetails/>} />
      <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
      <Route path='/about-us' element={<AboutUs/>} />






      
      </Routes>
      
    </div>
    <Footer/>
  </>
   
    
    
  )
}

export default App
*/

// scroll tot top
/*
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Chetan from './components/chetan/Chetan';
import Verify from './pages/Verify/Verify';
import ProductDetails from './components/ProductDetail/ProductDetails';
import ProductsYouMayLike from './components/ProductYouMayLike/ProductsYouMayLike';
import MyOrders from './pages/MyOrders/MyOrders';
import MoreDetails from './pages/MoreDetails/MoreDetails';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import AboutUs from './pages/AboutUs/AboutUs';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <ScrollToTop /> {/* Ensure this is inside the Router *//*}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/chetan' element={<Chetan />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/product-detail/:id' element={<ProductDetails />} />
          <Route path='/productyoumaylike' element={<ProductsYouMayLike />} />
          <Route path='/moredetails' element={<MoreDetails />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
*/

// popup 


import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Chetan from './components/chetan/Chetan';
import Verify from './pages/Verify/Verify';
import ProductDetails from './components/ProductDetail/ProductDetails';
import ProductsYouMayLike from './components/ProductYouMayLike/ProductsYouMayLike';
import MyOrders from './pages/MyOrders/MyOrders';
import MoreDetails from './pages/MoreDetails/MoreDetails';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import AboutUs from './pages/AboutUs/AboutUs';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import GuidePopUp from './components/GuidePopUp/GuidePopUp';

import BookRent from './pages/BookRent/BookRent';
import RentedBooks from './pages/RentedBooks/RentedBooks';
import ContactUs from './pages/ContactUs/ContactUs';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <ScrollToTop /> {/* Ensure this is inside the Router */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart  setShowLogin={setShowLogin}  />}/>
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/exploreall' element={<Chetan />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/product-detail/:id' element={<ProductDetails />} />
          <Route path='/productyoumaylike' element={<ProductsYouMayLike />} />
          <Route path='/moredetails' element={<MoreDetails />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/userguide' element={<GuidePopUp />} /> {/*// testing*/} 

          <Route path="/rent/:id" element={<BookRent />} />
          <Route path="/rentedbooks" element={<RentedBooks />} />
          <Route path="/contactus" element={<ContactUs />} />



        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
