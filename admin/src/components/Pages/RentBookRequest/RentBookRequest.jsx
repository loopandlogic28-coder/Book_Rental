// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './RentBookRequest.css';

// const statusOptions = [
//   { value: 'order_placed', label: 'Order Placed' },
//   { value: 'out_for_delivery', label: 'Out for Delivery' },
//   { value: 'delivered', label: 'Delivered' },
//   { value: 'returned', label: 'Returned' },
//   { value: 'cancelled', label: 'Cancelled' },
// ];

// const RentBookRequest = () => {
//   // ✅ No need for StoreContext in Admin; just use backend URL directly
//   // const url = 'http://localhost:4000';
//   const url ="https://book-rental-backend-mjwe.onrender.com"

//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch all rental requests (admin endpoint)
//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get(`${url}/api/rentals/all`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRequests(res.data.data || []);
//       } catch (err) {
//         console.error('Error fetching rental requests:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRequests();
//   }, []);

//   // ✅ Update order status
//  const updateStatus = async (id, status) => {
//   if (!window.confirm(`Change status to ${status}?`)) return;

//   try {
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}` }; // ✅ define headers

//     const res = await axios.put(
//       `${url}/api/rentals/${id}/status`, // ✅ correct path
//       { status },
//       { headers }
//     );

//     // ✅ Update local state
//     setRequests((prev) =>
//       prev.map((r) => (r._id === id ? res.data.rental || r : r))
//     );
//   } catch (err) {
//     console.error('Error updating status:', err);
//     alert('Failed to update status');
//   }
// };


//   // ✅ Color mapping for statuses
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'order_placed':
//         return 'gray';
//       case 'out_for_delivery':
//         return 'orange';
//       case 'delivered':
//         return 'green';
//       case 'returned':
//         return 'blue';
//       case 'cancelled':
//         return 'red';
//       default:
//         return 'black';
//     }
//   };

//   return (
//     <div className="admin-rent-requests">
//       <h2>Rental Requests (Admin)</h2>

//       {loading ? (
//         <p>Loading requests...</p>
//       ) : requests.length === 0 ? (
//         <p>No rental requests found.</p>
//       ) : (
//         requests.map((r) => (
//           <div
//             key={r._id}
//             className={`admin-rental-card ${
//               r.status === 'cancelled' ? 'cancelled' : ''
//             }`}
//           >
//             <img
//               src={`${url}/images/${r.productId?.image}`}
//               alt={r.productId?.name}
//               className="admin-rental-image"
//             />
//             <div className="admin-info">
//               <h3>{r.productId?.name}</h3>
//               <p>
//                 <strong>User:</strong> {r.userId?.name} ({r.userId?.email})
//               </p>
//               <p>
//                 <strong>Mobile:</strong> {r.mobile}
//               </p>
//               <p>
//                 <strong>From:</strong> {new Date(r.fromDate).toLocaleDateString()}
//                 {' → '}
//                 <strong>To:</strong> {new Date(r.toDate).toLocaleDateString()}
//               </p>
//               <p>
//                 <strong>Quantity:</strong> {r.quantity}
//               </p>
//               <p>
//                 <strong>Total:</strong> ₹{r.totalAmount}
//               </p>
//               <p>
//                 <strong>Status:</strong>{' '}
//                 <span
//                   style={{
//                     color: 'white',
//                     backgroundColor: getStatusColor(r.status),
//                     padding: '2px 8px',
//                     borderRadius: '6px',
//                   }}
//                 >
//                   {r.status}
//                 </span>
//               </p>
//               <div className="status-controls">
//                 <select
//                   onChange={(e) => updateStatus(r._id, e.target.value)}
//                   value={r.status}
//                 >
//                   {statusOptions.map((s) => (
//                     <option key={s.value} value={s.value}>
//                       {s.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default RentBookRequest;


// upparr wala ok hai but image nhi show ho rha coz abb cloudinary use kiya hai so  neehce wala wohi hai 

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // ✅ import confirmAlert
import 'react-confirm-alert/src/react-confirm-alert.css'; // ✅ styles
import './RentBookRequest.css';

const statusOptions = [
  { value: 'order_placed', label: 'Order Placed' },
  { value: 'out_for_delivery', label: 'Out for Delivery' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'returned', label: 'Returned' },
  { value: 'cancelled', label: 'Cancelled' },
];

const RentBookRequest = () => {
  const url = 'https://book-rental-backend-mjwe.onrender.com';
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${url}/api/rentals/all`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRequests(res.data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  // ✅ Update status with confirmation dialog
  const updateStatus = (id, newStatus) => {
    confirmAlert({
      title: 'Confirm Status Change',
      message: `Do you really want to change the status to "${newStatus.replaceAll('_', ' ')}"?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              const token = localStorage.getItem('token');
              const res = await axios.put(
                `${url}/api/rentals/${id}/status`,
                { status: newStatus },
                { headers: { Authorization: `Bearer ${token}` } }
              );

              // ✅ Merge previous rental object with new status
              setRequests((prev) =>
                prev.map((r) =>
                  r._id === id ? { ...r, status: newStatus } : r
                )
              );
            } catch (err) {
              alert('Failed to update status');
              console.error(err);
            }
          },
        },
        {
          label: 'No',
          onClick: () => {} // do nothing
        },
      ],
    });
  };

  return (
    <div className="admin-rent-requests">
      <h2>Rental Requests (Admin)</h2>

      {loading ? (
        <p>Loading...</p>
      ) : requests.length === 0 ? (
        <p>No rental requests</p>
      ) : (
        requests.map((r) => (
          <div
            key={r._id}
            className={`admin-rental-card ${r.status === 'cancelled' ? 'cancelled' : ''}`}
          >
            {/* CLOUDINARY IMAGE */}
            <img
              src={r.productId?.image}
              alt={r.productId?.name}
              onError={(e) => (e.target.src = '/placeholder-book.png')}
            />

            <div className="admin-info">
              <h3>{r.productId?.name}</h3>

              <div className="info-grid">
                <p><b>User:</b> {r.userId?.name}</p>
                <p><b>Email:</b> {r.userId?.email}</p>
                <p><b>Mobile:</b> {r.mobile}</p>
                <p><b>Qty:</b> {r.quantity}</p>
                <p><b>From:</b> {new Date(r.fromDate).toLocaleDateString()}</p>
                <p><b>To:</b> {new Date(r.toDate).toLocaleDateString()}</p>
                <p><b>Total:</b> ₹{r.totalAmount}</p>
              </div>

              <div className="status-row">
                <span className={`status ${r.status}`}>
                  {r.status.replaceAll('_', ' ')}
                </span>

                <select
                  value={r.status}
                  onChange={(e) => updateStatus(r._id, e.target.value)}
                >
                  {statusOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RentBookRequest;
