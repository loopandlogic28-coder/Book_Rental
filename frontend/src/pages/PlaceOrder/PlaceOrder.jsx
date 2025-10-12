
// // Toast functionality

// import React, { useContext, useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import "./PlaceOrder.css";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";

// const PlaceOrder = () => {
//   const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("");

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onPaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const placeOrder = async (event) => {
//     event.preventDefault();
//     if (!paymentMethod) {
//       alert("Please select a payment method to proceed");
//       return;
//     }
//     let orderItems = [];
//     food_list.map((item) => {
//       if (cartItems[item._id] > 0) {
//         let itemInfo = item;
//         itemInfo["quantity"] = cartItems[item._id];
//         orderItems.push(itemInfo);
//       }
//     });
//     let orderData = {
//       address: data,
//       items: orderItems,
//       amount: getTotalCartAmount() + 40,
//       paymentMethod
//     };
//     let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
//     if (response.data.success) {
//       if (paymentMethod === 'COD') {
//         window.location.replace('/myorders?order_placed=true');
//       } else {
//         const { session_url } = response.data;
//         window.location.replace(session_url);
//       }
//     } else {
//       alert("ERROR");
//     }
//   };

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate('/cart');
//     } else if (getTotalCartAmount() === 0) {
//       navigate('/cart');
//     }
//   }, [token]);

//   return (
//     <form onSubmit={placeOrder} className="place-order">
//       <div className="place-order-left">
//         <p className="title">Delivery Information</p>
//         <div className="multi-fields">
//           <input
//             required
//             name="firstName"
//             onChange={onChangeHandler}
//             value={data.firstName}
//             type="text"
//             placeholder="First Name"
//           />
//           <input
//             required
//             name="lastName"
//             onChange={onChangeHandler}
//             value={data.lastName}
//             type="text"
//             placeholder="Last Name"
//           />
//         </div>
//         <input
//           required
//           name="email"
//           onChange={onChangeHandler}
//           value={data.email}
//           type="email"
//           placeholder="Email address"
//         />
//         <input
//           required
//           name="street"
//           onChange={onChangeHandler}
//           value={data.street}
//           type="text"
//           placeholder="Street"
//         />
//         <div className="multi-fields">
//           <input
//             required
//             name="city"
//             onChange={onChangeHandler}
//             value={data.city}
//             type="text"
//             placeholder="City"
//           />
//           <input
//             required
//             name="state"
//             onChange={onChangeHandler}
//             value={data.state}
//             type="text"
//             placeholder="State"
//           />
//         </div>
//         <div className="multi-fields">
//           <input
//             required
//             name="zipcode"
//             onChange={onChangeHandler}
//             value={data.zipcode}
//             type="text"
//             placeholder="Zip code"
//           />
//           <input
//             required
//             name="country"
//             onChange={onChangeHandler}
//             value={data.country}
//             type="text"
//             placeholder="Country"
//           />
//         </div>
//         <input
//           required
//           name="phone"
//           onChange={onChangeHandler}
//           value={data.phone}
//           type="text"
//           placeholder="Phone"
//         />
//       </div>
//       <div className="place-order-right">
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
//         </div>
//         <div className="payment-method">
//           <p>Payment Method</p>
//           <div className="payment-options">
//             <label>
//               <input
//                 type="radio"
//                 value="COD"
//                 checked={paymentMethod === "COD"}
//                 onChange={onPaymentMethodChange}
//               />
//               COD (Cash On Delivery)
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="Stripe"
//                 checked={paymentMethod === "Stripe"}
//                 onChange={onPaymentMethodChange}
//               />
//               Stripe (Credit / Debit )
//             </label>
//           </div>
//         </div>
//         <button type="submit">Place Order</button>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;


import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onPaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    if (!paymentMethod) {
      alert("Please select a payment method to proceed");
      return;
    }

    // Create order items safely (do not mutate original list)
    const orderItems = food_list
      .filter(item => cartItems[item._id] > 0)
      .map(item => ({
        _id: item._id,
        name: item.name,
        price: item.price,
        quantity: cartItems[item._id],
      }));

    if (orderItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 40, // delivery fee
      paymentMethod
    };

    try {
      // Send token properly in Authorization header
      const response = await axios.post(
        `${url}/api/order/place`,
        orderData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        if (paymentMethod === 'COD') {
          window.location.replace('/myorders?order_placed=true');
        } else {
          const { session_url } = response.data;
          if (session_url) {
            window.location.replace(session_url);
          } else {
            alert("Stripe session not found. Please try again.");
          }
        }
      } else {
        alert(response.data.message || "Error placing order");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while placing the order");
    }
  };

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email address"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
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
        </div>

        <div className="payment-method">
          <p>Payment Method</p>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={onPaymentMethodChange}
              />
              COD (Cash On Delivery)
            </label>
            <label>
              <input
                type="radio"
                value="Stripe"
                checked={paymentMethod === "Stripe"}
                onChange={onPaymentMethodChange}
              />
              Stripe (Credit / Debit)
            </label>
          </div>
        </div>

        <button type="submit">Place Order</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
