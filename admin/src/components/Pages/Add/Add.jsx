

// import React, { useState } from 'react';
// import './Add.css';
// import { assets } from '../../../assets/assets';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Add = ({ url }) => {
//   const [image, setImage] = useState(null);
//   const [data, setData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: 'Fiction',
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const img = new Image();
//     img.src = URL.createObjectURL(file);
//     img.onload = () => {
//       const canvas = document.createElement('canvas');
//       const size = 500; // square size
//       canvas.width = size;
//       canvas.height = size;
//       const ctx = canvas.getContext('2d');

//       const minSide = Math.min(img.width, img.height);
//       ctx.drawImage(
//         img,
//         (img.width - minSide) / 2,
//         (img.height - minSide) / 2,
//         minSide,
//         minSide,
//         0,
//         0,
//         size,
//         size
//       );

//       canvas.toBlob((blob) => {
//         setImage(new File([blob], file.name, { type: 'image/jpeg' }));
//       }, 'image/jpeg', 0.8);
//     };
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('name', data.name);
//     formData.append('description', data.description);
//     formData.append('price', Number(data.price));
//     formData.append('category', data.category);
//     formData.append('image', image);

//     try {
//       // const response = await axios.post(`${url}/api/food/add`, formData);
//       // uppar ka coludinary ka hai 

//       const response = await axios.post(`${url}/api/food/add`, formData, {
//   headers: { "Content-Type": "multipart/form-data" }
// });
//       if (response.data.success) {
//         setData({
//           name: '',
//           description: '',
//           price: '',
//           category: 'Fiction',
//         });
//         setImage(null);
//         toast.success(response.data.message);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error('An error occurred while adding the product');
//     }
//   };

//   return (
//     <div className='add'>
//       <form className='flex-col' onSubmit={onSubmitHandler}>
//         <div className="add-img-upload flex-col">
//           <p>Upload Image</p>
//           <label htmlFor="image">
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt="Upload area"
//             />
//           </label>
//           <input
//             onChange={handleImageChange}
//             type="file"
//             id="image"
//              name="image" 
//             hidden
//             required
//           />
//         </div>
//         <div className="add-product-name flex-col">
//           <p>Product name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type="text"
//             name='name'
//             placeholder='Type here'
//             required
//           />
//         </div>
//         <div className="add-product-description flex-col">
//           <p>Product description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name="description"
//             rows="6"
//             placeholder='Write content here'
//             required
//           ></textarea>
//         </div>
//         <div className="add-category-price">
//           <div className="add-category flex-col">
//             <p>Product category</p>
//             <select
//               onChange={onChangeHandler}
//               name="category"
//               value={data.category}
//               required
//             >
//               <option value="Fiction">Fiction</option>
//               <option value="Non-Fiction">Non-Fiction</option>
//               <option value="Comics">Comics</option>
//               <option value="Novels">Novels</option>
//               <option value="Finance">Finance</option>
//               <option value="Technology">Technology</option>
//               <option value="Travel">Travel</option>
//               <option value="Health">Health</option>
//             </select>
//           </div>
//           <div className="add-price flex-col">
//             <p>Product price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type="number"
//               name='price'
//               placeholder='₹ 20'
//               required
//             />
//           </div>
//         </div>
//         <button type='submit' className='add-button'>ADD</button>
//       </form>
//     </div>
//   );
// };

// export default Add;

/// addding toast book addded successfull


import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // 👈 loader state

  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Fiction',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 500;
      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext('2d');
      const minSide = Math.min(img.width, img.height);

      ctx.drawImage(
        img,
        (img.width - minSide) / 2,
        (img.height - minSide) / 2,
        minSide,
        minSide,
        0,
        0,
        size,
        size
      );

      canvas.toBlob(
        (blob) => {
          const processedFile = new File([blob], file.name, {
            type: 'image/jpeg',
          });
          setImage(processedFile);
        },
        'image/jpeg',
        0.8
      );
    };
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (loading) return; // 👈 double-click protection

    if (!image) {
      toast.error("Please upload a book image");
      return;
    }

    setLoading(true); // 👈 start loader

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        setData({
          name: '',
          description: '',
          price: '',
          category: 'Fiction',
        });
        setImage(null);

        toast.success("Book added successfully");
      } else {
        toast.error(response.data.message || "Failed to add book");
      }
    } catch (error) {
      toast.error("An error occurred while adding the book");
    } finally {
      setLoading(false); // 👈 stop loader
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload area"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            name="name"
            value={data.name}
            onChange={onChangeHandler}
            type="text"
            placeholder="Type here"
            required
            disabled={loading}
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            name="description"
            value={data.description}
            onChange={onChangeHandler}
            rows="6"
            placeholder="Write content here"
            required
            disabled={loading}
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
              disabled={loading}
            >
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Comics">Comics</option>
              <option value="Novels">Novels</option>
              <option value="Finance">Finance</option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Health">Health</option>
               <option value="Hindi">Hindi</option>
              <option value="Marathi">Marathi</option>
              <option value="Gujrati">Gujrati</option>
              <option value="French">French</option>
              <option value="Urdu">Urdu</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              name="price"
              value={data.price}
              onChange={onChangeHandler}
              type="number"
              placeholder="₹ 20"
              required
              disabled={loading}
            />
          </div>
        </div>

        <button type="submit" className="add-button" disabled={loading}>
          {loading ? <span className="btn-loader"></span> : "ADD"}
        </button>
      </form>
    </div>
  );
};

export default Add;

