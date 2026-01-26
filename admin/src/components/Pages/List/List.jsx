
// import React, { useEffect, useState } from 'react';
// import './List.css';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { confirmAlert } from "react-confirm-alert"; // Import confirmAlert
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// const List = ({ url }) => {
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     const response = await axios.get(`${url}/api/food/list`);

//     if (response.data.success) {
//       setList(response.data.data);
//     } else {
//       toast.error("Error");
//     }
//   }

//   const removeFood = async (foodId) => {
//     const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
//     await fetchList();
//     if (response.data.success) {
//       toast.success(response.data.message);
//     } else {
//       toast.error("Error");
//     }
//   }

//   const handleRemoveFoodClick = (foodId) => {
//     confirmAlert({
//       title: "Confirm to remove",
//       message: "Are you sure you want to remove this item?",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: () => removeFood(foodId),
//         },
//         {
//           label: "No",
//         },
//       ],
//     });
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <div className='list add flex-col'>
//       <p>All Foods List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b>Action</b>
//         </div>
//         {list.map((item, index) => {
//           return (
//             <div key={index} className='list-table-format'>
//               {/* <img src={`${url}/images/` + item.image} alt='' /> */}
//               {/* uppar wala bina cloudinary k proper hai  */}
//               <img src={item.image} alt='' />

//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>₹ {item.price}</p>
//               <p onClick={() => handleRemoveFoodClick(item._id)} className='cursor'>x</p>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default List;

// uppaar ka best hai deployed hai but neeche wale mein toast ntoification update kar rahe hai aur bss sab sorted hai 


import React, { useEffect, useState } from 'react';
import './List.css';
import axios from "axios";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch books");
      }
    } catch (error) {
      toast.error("Something went wrong while fetching books");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });

      if (response.data.success) {
        toast.success("Book removed successfully");
        fetchList(); // refresh list after delete
      } else {
        toast.error("Failed to remove book");
      }
    } catch (error) {
      toast.error("Something went wrong while removing the book");
    }
  };

  const handleRemoveFoodClick = (foodId) => {
    confirmAlert({
      title: "Confirm removal",
      message: "Are you sure you want to remove this book?",
      buttons: [
        {
          label: "Yes",
          onClick: () => removeFood(foodId),
        },
        {
          label: "No",
        },
      ],
    });
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Books List</p>

      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            {/* Cloudinary image */}
            <img src={item.image} alt={item.name} />

            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹ {item.price}</p>

            <p
              className='cursor'
              onClick={() => handleRemoveFoodClick(item._id)}
            >
              x
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

