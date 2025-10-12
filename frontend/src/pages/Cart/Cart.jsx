/*import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount ,url} = useContext(StoreContext);
const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() ===0?0:getTotalCartAmount()+10}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECK-OUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; */

// these is used for solving error from gpt
/*
import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}> {/* ADDING UNIQUE KEY PROP */ /*}
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p> {/* ENSURE FUNCTION IS CALLED */ /*}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 10}</p> {/* ENSURE FUNCTION IS CALLED */ /*}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}</b> {/* ENSURE FUNCTION IS CALLED *//*}
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECK-OUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; */

/*
import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    if (getTotalCartAmount() === 0) {
      toast.error("Please add an item to the cart to proceed.");
    } else {
      navigate('/order');
    }
  };

  return (
    <div className="cart">
      <ToastContainer />
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p> {/* Ensure function is called *//*}
           /* </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 40}</p> {/* Ensure function is called *//*}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}</b> {/* Ensure function is called *//*}
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECK-OUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
*/
/*

import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import the package
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    if (getTotalCartAmount() === 0) {
      toast.error("Please add an item to the cart to proceed.");
    } else {
      navigate('/order');
    }
  };

  const handleRemoveFromCart = (itemId) => {
    confirmAlert({
      title: 'Confirm to remove',
      message: 'Are you sure you want to remove one  item from the cart?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => removeFromCart(itemId)
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  return (
    <div className="cart">
      <ToastContainer />
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => handleRemoveFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p> {/* Ensure function is called *//*}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 40}</p> {/* Ensure function is called *//*}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}</b> {/* Ensure function is called *//*}
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECK-OUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

*/

// promocode 

import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import the package
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");

  const handleProceedToCheckout = () => {
    if (getTotalCartAmount() === 0) {
      toast.error("Please add an item to the cart to proceed.");
    } else {
      navigate('/order');
    }
  };

  const handleRemoveFromCart = (itemId) => {
    confirmAlert({
      title: 'Confirm to remove',
      message: 'Are you sure you want to remove one item from the cart?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => removeFromCart(itemId)
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  const handlePromoCodeSubmit = (event) => {
    event.preventDefault();
    // Display toast notification for invalid promo code
    toast.error("Invalid code");
    // Optionally, you can clear the promo code input
    setPromoCode("");
  };

  return (
    <div className="cart">
      <ToastContainer />
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => handleRemoveFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p> 
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 40}</p> 
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}</b> 
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECK-OUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input
                type="text"
                placeholder="promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handlePromoCodeSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


//done popupp (shastra vishwash)

// import React, { useContext, useState, useEffect } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';

// const Cart = ({ setShowLogin }) => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext); // Make sure `url` is destructured here
//   const navigate = useNavigate();
//   const [promoCode, setPromoCode] = useState("");

//   const handleProceedToCheckout = () => {
//     if (!token) {
//       setShowLogin(true);
//       toast.error("Please login to proceed");
//       return;
//     }

//     if (getTotalCartAmount() === 0) {
//       toast.error("Please add an item to the cart to proceed.");
//     } else {
//       navigate('/order');
//     }
//   };

//   const handleRemoveFromCart = (itemId) => {
//     confirmAlert({
//       title: 'Confirm to remove',
//       message: 'Are you sure you want to remove one item from the cart?',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => removeFromCart(itemId)
//         },
//         {
//           label: 'No',
//           onClick: () => {}
//         }
//       ]
//     });
//   };

//   const handlePromoCodeSubmit = (event) => {
//     event.preventDefault();
//     toast.error("Invalid code");
//     setPromoCode("");
//   };

//   return (
//     <div className="cart">
//       <ToastContainer />
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={item._id}>
//                 <div className="cart-items-title cart-items-item">
//                   <img src={url + "/images/" + item.image} alt="" /> {/* Ensure `url` is defined here */}
//                   <p>{item.name}</p>
//                   <p>₹{item.price}</p>
//                   <p>{cartItems[item._id]}</p>
//                   <p>₹{item.price * cartItems[item._id]}</p>
//                   <p onClick={() => handleRemoveFromCart(item._id)} className="cross">
//                     x
//                   </p>
//                 </div>
//                 <hr />
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Total</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>{getTotalCartAmount() === 0 ? 0 : 40}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}</b>
//             </div>
//           </div>
//           <button onClick={handleProceedToCheckout}>PROCEED TO CHECK-OUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, Enter it here</p>
//             <div className="cart-promocode-input">
//               <input
//                 type="text"
//                 placeholder="promo code"
//                 value={promoCode}
//                 onChange={(e) => setPromoCode(e.target.value)}
//               />
//               <button onClick={handlePromoCodeSubmit}>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
