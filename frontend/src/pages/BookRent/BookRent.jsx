

// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import './BookRent.css'; // You can style as needed
// import { jwtDecode } from 'jwt-decode';


// const BookRent = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { url } = useContext(StoreContext);

//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     fromDate: '',
//     toDate: '',
//   });

//   const [userId, setUserId] = useState(null);
//   const dailyCharge = 20;
//   const deliveryCharge = 30;

//   useEffect(() => {
//     // Get token from localStorage and decode user ID
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);

//         setUserId(decoded?.id || null);
//       } catch (err) {
//         console.error('Invalid token');
//       }
//     }
//   }, []);

//   // temperoray for loging id n all
//   useEffect(() => {
//   const token = localStorage.getItem('token');
//   if (token) console.log("Decoded:", jwtDecode(token));
// }, []);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`${url}/api/food/${id}`);
//         setProduct(res.data.data);
//       } catch (err) {
//         console.error('Failed to fetch product');
//       }
//     };
//     if (id) fetchProduct();
//   }, [id, url]);

//   const getDaysCount = () => {
//     const { fromDate, toDate } = form;
//     if (!fromDate || !toDate) return 0;
//     const from = new Date(fromDate);
//     const to = new Date(toDate);
//     const diffTime = to - from;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays > 0 ? diffDays : 0;
//   };

//   const calculateTotal = () => {
//     const days = getDaysCount();
//     return (days * dailyCharge * quantity) + deliveryCharge;
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

// const handleConfirmRent = async () => {
//   if (!form.name || !form.email || !form.mobile || !form.fromDate || !form.toDate) {
//     alert('Please fill in all fields');
//     return;
//   }

//   const confirmed = window.confirm("Are you sure you want to rent this book?");
//   if (!confirmed) return;

//   const token = localStorage.getItem('token');
//   if (!userId) {
//     alert('User not logged in properly.');
//     return;
//   }

//   const rentalData = {
//     userId,
//     productId: id,
//     quantity,
//     name: form.name,
//     email: form.email,
//     mobile: form.mobile,
//     fromDate: form.fromDate,
//     toDate: form.toDate,
//     totalAmount: calculateTotal(),
//   };

//   console.log("Sending Rental Data:", rentalData);

//   try {
//     const res = await axios.post(`${url}/api/rentals`, rentalData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     if (res.data.success) {
//       alert('Book rented successfully!');
//       navigate('/rentedbooks');
//     } else {
//       alert('Failed to rent: ' + (res.data.message || ''));
//     }
//   } catch (err) {
//     console.error('Rental Error:', err);
//     alert('Server error, try again');
//   }
// };



//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="rent-page">
//       <h2>Rent This Book</h2>
//       <div className="rent-book-card">
//         <img src={`${url}/images/${product.image}`} alt="Book" />
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>
//       </div>

//       <form className="rent-form">
//         <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//         <input type="text" name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required />

//         <label>From Date:</label>
//         <input type="date" name="fromDate" value={form.fromDate} onChange={handleChange} required />

//         <label>To Date:</label>
//         <input type="date" name="toDate" value={form.toDate} onChange={handleChange} required />

//         <label>Quantity:</label>
//         <input
//           type="number"
//           min="1"
//           value={quantity}
//           onChange={(e) => setQuantity(parseInt(e.target.value))}
//         />

//         <div className="charges-section">
//           <p>📅 Days: <strong>{getDaysCount()}</strong></p>
//           <p>💰 Per Day Charge: ₹{dailyCharge}</p>
//           <p>🚚 Delivery Charge: ₹{deliveryCharge}</p>
//           <p>🧮 Total Amount: <strong>₹{calculateTotal()}</strong></p>
//           <p>⚠️ Late Fee (after end date): ₹20/day (static)</p>
//         </div>

//         <button type="button" className="rent-confirm-btn" onClick={handleConfirmRent}>
//           Confirm Rent
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookRent;

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { jwtDecode } from "jwt-decode";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./BookRent.css";

const BookRent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { url } = useContext(StoreContext);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [userId, setUserId] = useState(null);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    fromDate: "",
    toDate: "",
  });

  const dailyCharge = 20;
  const deliveryCharge = 30;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded?.id || null);
      } catch {
        console.error("Invalid token");
      }
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${url}/api/food/${id}`);
        setProduct(res.data.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };
    if (id) fetchProduct();
  }, [id, url]);

  const getDaysCount = () => {
    const { fromDate, toDate } = form;
    if (!fromDate || !toDate) return 0;
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const diffTime = to - from;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const calculateTotal = () => {
    const days = getDaysCount();
    return days * dailyCharge * quantity + deliveryCharge;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(form.mobile))
      newErrors.mobile = "Enter a valid 10-digit number";
    if (!form.fromDate) newErrors.fromDate = "Select start date";
    if (!form.toDate) newErrors.toDate = "Select end date";
    if (getDaysCount() <= 0)
      newErrors.toDate = "End date must be after start date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmRent = async () => {
    if (!validateForm()) return;

    confirmAlert({
      title: "Confirm Book Rental",
      message: `Do you want to rent "${product?.name}" for ₹${calculateTotal()}?`,
      buttons: [
        {
          label: "Yes, Confirm",
          onClick: async () => {
            const token = localStorage.getItem("token");
            if (!userId) {
              alert("User not logged in properly.");
              return;
            }

            const rentalData = {
              userId,
              productId: id,
              quantity,
              ...form,
              totalAmount: calculateTotal(),
            };

            try {
              const res = await axios.post(`${url}/api/rentals`, rentalData, {
                headers: { Authorization: `Bearer ${token}` },
              });
              if (res.data.success) {
                confirmAlert({
                  title: "Success!",
                  message: "Book rented successfully 🎉",
                  buttons: [
                    {
                      label: "Go to Rented Books",
                      onClick: () => navigate("/rentedbooks"),
                    },
                  ],
                });
              } else {
                alert("Failed: " + (res.data.message || "Unknown error"));
              }
            } catch (err) {
              console.error("Rental Error:", err);
              alert("Server error, please try again.");
            }
          },
        },
        { label: "Cancel" },
      ],
    });
  };

  if (!product) return <div className="loading">Loading book details...</div>;

  return (
    <div className="rent-page">
      <h2 className="page-title">📖 Rent This Book</h2>

      {/* --- Book Card Section --- */}
      <div className="book-summary">
        <div className="book-image">
          <img src={`${url}/images/${product.image}`} alt={product.name} />
        </div>

        <div className="book-details">
          <h3>{product.name}</h3>
          <p className="author">by {product.author || "Unknown Author"}</p>

          <table className="book-info-table">
            <tbody>
              <tr>
                <td><strong>Book Price</strong></td>
                <td>₹{product.price}</td>
              </tr>
              <tr>
                <td><strong>Daily Rent</strong></td>
                <td>₹{dailyCharge}</td>
              </tr>
              <tr>
                <td><strong>Delivery Charge</strong></td>
                <td>₹{deliveryCharge}</td>
              </tr>
              <tr>
                <td><strong>Quantity</strong></td>
                <td>{quantity}</td>
              </tr>
            </tbody>
          </table>

          <p className="description">{product.description}</p>
        </div>
      </div>

      {/* --- Rental Form --- */}
      <form className="rent-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="10-digit number"
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>From Date</label>
            <input
              type="date"
              name="fromDate"
              value={form.fromDate}
              onChange={handleChange}
            />
            {errors.fromDate && <span className="error">{errors.fromDate}</span>}
          </div>

          <div className="form-group">
            <label>To Date</label>
            <input
              type="date"
              name="toDate"
              value={form.toDate}
              onChange={handleChange}
            />
            {errors.toDate && <span className="error">{errors.toDate}</span>}
          </div>
        </div>

        <div className="charges-section">
          <p><strong>Days:</strong> {getDaysCount()}</p>
          <p><strong>Total Rent:</strong> ₹{calculateTotal()}</p>
          <small>⚠️ Late Fee: ₹20/day after return date</small>
        </div>

        <button type="button" className="rent-btn" onClick={handleConfirmRent}>
          Confirm Rental
        </button>
      </form>
    </div>
  );
};

export default BookRent;
