// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import './RentedBooks.css';

// const LATE_FEE_PER_DAY = 20; // match your static fee

// const RentedBooks = () => {
//   const { url } = useContext(StoreContext);
//   const [rentals, setRentals] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get(`${url}/api/rentals/my`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRentals(res.data.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetch();
//   }, [url]);

//   const handleCancel = async (rental) => {
//     if (rental.status === 'delivered') {
//       alert('Cannot cancel after delivered');
//       return;
//     }
//     if (!window.confirm('Cancel this rental?')) return;
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(`${url}/api/rentals/${rental._id}/cancel`, {}, {
//   headers: { Authorization: `Bearer ${token}` }
// });
//       setRentals(rentals.map(r => r._id === rental._id ? { ...r, status: 'cancelled', cancelledBy: 'user' } : r));
//     } catch (err) {
//       console.error(err);
//       alert('Cancel failed');
//     }
//   };

//   const getEffectiveStartDate = (r) => {
//     // If admin marked delivered, rental days start from deliveredDate, else start from fromDate
//     return r.deliveredDate ? new Date(r.deliveredDate) : new Date(r.fromDate);
//   };

//   const calculateDaysAndLate = (r) => {
//     const start = getEffectiveStartDate(r);
//     const end = new Date(r.toDate);
//     // days user had the book (including delivered day to toDate inclusive)
//     const daysRented = Math.ceil((end - start) / (1000*60*60*24)) + 1; // +1 to include both days
//     const today = new Date();
//     const lateDays = Math.max(0, Math.ceil((today - end) / (1000*60*60*24)));
//     const lateFee = lateDays * LATE_FEE_PER_DAY;
//     return { daysRented: daysRented > 0 ? daysRented : 0, lateDays, lateFee };
//   };

//   return (
//     <div className="rented-books-page">
//       <h2>My Rented Books</h2>
//       {rentals.length === 0 ? <p>No rentals yet.</p> : (
//         rentals.map(r => {
//           const { daysRented, lateDays, lateFee } = calculateDaysAndLate(r);
//           return (
//             <div key={r._id} className={`rental-card ${r.status === 'cancelled' ? 'cancelled' : ''}`}>
//               <img src={`${url}/images/${r.productId?.image}`} alt={r.productId?.name} />
//               <div className="rental-info">
//                 <h3>{r.productId?.name}</h3>
//                 <p>From: {new Date(r.fromDate).toLocaleDateString()} &nbsp; To: {new Date(r.toDate).toLocaleDateString()}</p>
//                 <p>Effective Start: {r.deliveredDate ? new Date(r.deliveredDate).toLocaleDateString() : 'Not delivered yet'}</p>
//                 <p>Quantity: {r.quantity}</p>
//                 <p>Days (calculated): {daysRented}</p>
//                 <p>Total: ₹{r.totalAmount}</p>
//                 <p>Late Days: {lateDays} &nbsp; Late Fee: ₹{lateFee}</p>
//                 <p>Status: <strong>{r.status}</strong></p>

//                 {r.status !== 'delivered' && r.status !== 'cancelled' && (
//                   <button onClick={() => handleCancel(r)}>Cancel</button>
//                 )}
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default RentedBooks;

/// old one upppar wala ok hai but neeche wale mein if no book rented so orange clr wala boxx aa ahai no orders wala 

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import NoOrders from '../../components/NoOrders/NoOrders';// ✅ import your NoOrders component
import './RentedBooks.css';

const LATE_FEE_PER_DAY = 20; // static fee

const RentedBooks = () => {
  const { url } = useContext(StoreContext);
  const [rentals, setRentals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${url}/api/rentals/my`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRentals(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [url]);

  const handleCancel = async (rental) => {
    if (rental.status === 'delivered') {
      alert('Cannot cancel after delivered');
      return;
    }
    if (!window.confirm('Cancel this rental?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.put(`${url}/api/rentals/${rental._id}/cancel`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRentals(rentals.map(r => 
        r._id === rental._id ? { ...r, status: 'cancelled', cancelledBy: 'user' } : r
      ));
    } catch (err) {
      console.error(err);
      alert('Cancel failed');
    }
  };

  const getEffectiveStartDate = (r) => {
    return r.deliveredDate ? new Date(r.deliveredDate) : new Date(r.fromDate);
  };

  const calculateDaysAndLate = (r) => {
    const start = getEffectiveStartDate(r);
    const end = new Date(r.toDate);
    const daysRented = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    const today = new Date();
    const lateDays = Math.max(0, Math.ceil((today - end) / (1000 * 60 * 60 * 24)));
    const lateFee = lateDays * LATE_FEE_PER_DAY;
    return { daysRented: daysRented > 0 ? daysRented : 0, lateDays, lateFee };
  };

  return (
    <div className="rented-books-page">
      <h2>My Rented Books</h2>

      {/* ✅ If no rentals, show NoOrders component */}
      {rentals.length === 0 ? (
        <NoOrders />
      ) : (
        rentals.map(r => {
          const { daysRented, lateDays, lateFee } = calculateDaysAndLate(r);
          return (
            <div key={r._id} className={`rental-card ${r.status === 'cancelled' ? 'cancelled' : ''}`}>
              {/* <img src={`${url}/images/${r.productId?.image}`} alt={r.productId?.name} /> // yej wali line mein hum mongodb mein clodianry k through kar rhae toh woh use karna hai  */}

              <img
  src={r.productId?.image}
  alt={r.productId?.name}
  className="rental-book-img"
  onError={(e) => {
    e.target.src = "/no-image.png"; // optional fallback
  }}
/>

              <div className="rental-info">
                <h3>{r.productId?.name}</h3>
                <p>
                  From: {new Date(r.fromDate).toLocaleDateString()} &nbsp; To:{' '}
                  {new Date(r.toDate).toLocaleDateString()}
                </p>
                <p>
                  Effective Start:{' '}
                  {r.deliveredDate ? new Date(r.deliveredDate).toLocaleDateString() : 'Not delivered yet'}
                </p>
                <p>Quantity: {r.quantity}</p>
                <p>Days (calculated): {daysRented}</p>
                <p>Total: ₹{r.totalAmount}</p>
                <p>Late Days: {lateDays} &nbsp; Late Fee: ₹{lateFee}</p>
                <p>
                  Status: <strong>{r.status}</strong>
                </p>

                {r.status !== 'delivered' && r.status !== 'cancelled' && (
                  <button onClick={() => handleCancel(r)}>Cancel</button>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RentedBooks;
