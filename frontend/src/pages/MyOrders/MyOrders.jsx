/*import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './MyOrders.css';
import { assets } from "../../assets/assets";
import { StoreContext } from '../../context/StoreContext';

const MyOrders = () => {
   
const {url,token} = useContext(StoreContext);

    // logic by using that we can fetch the users data and save it in state variable
    const [data,setData] = useState([]);

    //function fetch orders

    const fetchOrders = async ()=> {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
       //  console.log(response.data.data)
    }

    useEffect(()=> {
        if(token) {
            fetchOrders();
        }
    },[token])



  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order,index)=>{
          return(
         <div key={index} className="my-orders-order">
          <img src={assets.parcel_icon} alt="" />
          <p>{order.items.map((item,index)=>{
            if (index=== order.items.length-1) {
              return item.name+" x "+item.quantity
            }
            else {
              return item.name+" x "+item.quantity+", "
            }
          })}</p>
          <p>₹{order.amount}.00</p>
          <p>Items: {order.items.length}</p>
          <p><span>&#x25cf;</span> <b>{order.status}</b></p> {/* hexcode used for bulletpoint *//*}
          <button onClick={fetchOrders}>Track Order</button>
         </div>
          )
        })}
      </div>
    
    </div>
  )
}

export default MyOrders
*/

// toast functionality
/*
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './MyOrders.css';
import { assets } from "../../assets/assets";
import { StoreContext } from '../../context/StoreContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const location = useLocation();

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    const sortedOrders = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setData(sortedOrders);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }

    if (new URLSearchParams(location.search).get('order_placed') === 'true') {
      toast.success('Order placed successfully!');
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <ToastContainer />
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>{order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity
                } else {
                  return item.name + " x " + item.quantity + ", "
                }
              })}</p>
              <p>₹{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span> <b>{order.status}</b></p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders;
*/

// no  orders 
/*
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './MyOrders.css';
import { assets } from "../../assets/assets";
import { StoreContext } from '../../context/StoreContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import NoOrders from '../../components/NoOrders/NoOrders'; // Import the NoOrders component

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const location = useLocation();

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    const sortedOrders = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setData(sortedOrders);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }

    if (new URLSearchParams(location.search).get('order_placed') === 'true') {
      toast.success('Order placed successfully!');
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <ToastContainer />
      <h2>My Orders</h2>
      <div className="container">
        {data.length === 0 ? (
          <NoOrders />
        ) : (
          data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>{order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity
                } else {
                  return item.name + " x " + item.quantity + ", "
                }
              })}</p>
              <p>₹{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span> <b>{order.status}</b></p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default MyOrders;
*/

// sorting

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './MyOrders.css';
import { assets } from "../../assets/assets";
import { StoreContext } from '../../context/StoreContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import NoOrders from '../../components/NoOrders/NoOrders'; // Import the NoOrders component

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const location = useLocation();

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
      const orders = response.data.data;
      setData(orders.reverse()); // Reverse the array to show the most recent order at the top
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }

    if (new URLSearchParams(location.search).get('order_placed') === 'true') {
      toast.success('Order placed successfully!');
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <ToastContainer />
      <h2>My Orders</h2>
      <div className="container">
        {data.length === 0 ? (
          <NoOrders />
        ) : (
          data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>{order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity
                } else {
                  return item.name + " x " + item.quantity + ", "
                }
              })}</p>
              <p>₹{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span> <b>{order.status}</b></p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default MyOrders;
