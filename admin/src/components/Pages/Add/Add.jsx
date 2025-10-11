
// // required

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
//     // category: 'Earrings',
//     category: 'tshirt',

//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prevData) => ({ ...prevData, [name]: value }));
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
//       const response = await axios.post(`${url}/api/food/add`, formData);
//       if (response.data.success) {
//         // Reset form data and image, and set category to default
//         setData({
//           name: '',
//           description: '',
//           price: '',
//           // category: 'Earrings', // Reset category to default
//           category: 'tshirt', // Reset category to default

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
//             <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload area" />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type="file"
//             id="image"
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
//               value={data.category} // Ensure the value is controlled
//               required
//             >
//               {/* <option value="Earrings">Earrings</option>
            

//               <option value="Rolls">Rolls</option>
//               <option value="Deserts">Deserts</option>
//               <option value="Sandwich">Sandwich</option>
//               <option value="Cake">Cake</option>
//               <option value="Pure Veg">Pure Veg</option>
//               <option value="Pasta">Pasta</option>
//               <option value="Noodles">Noodles</option> */}
//           {/* // upar ka ok hai neeche wale mein sirf text change krr rahe  */}

//            <option value="Earrings">Fiction</option>
            

//               <option value="Rolls">Non-Fiction</option>
//               <option value="Deserts">Comics</option>
//               <option value="Sandwich">Novels</option>
//               <option value="Cake">Finance</option>
//               <option value="Pure Veg">Technology</option>
//               <option value="Pasta">Travel</option>
//               <option value="Noodles">Health</option>
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



import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'tshirt',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 500; // square size
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

      canvas.toBlob((blob) => {
        setImage(new File([blob], file.name, { type: 'image/jpeg' }));
      }, 'image/jpeg', 0.8);
    };
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: '',
          description: '',
          price: '',
          category: 'tshirt',
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred while adding the product');
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload area"
            />
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name='name'
            placeholder='Type here'
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder='Write content here'
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              value={data.category}
              required
            >
              <option value="Earrings">Fiction</option>
              <option value="Rolls">Non-Fiction</option>
              <option value="Deserts">Comics</option>
              <option value="Sandwich">Novels</option>
              <option value="Cake">Finance</option>
              <option value="Pure Veg">Technology</option>
              <option value="Pasta">Travel</option>
              <option value="Noodles">Health</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name='price'
              placeholder='₹ 20'
              required
            />
          </div>
        </div>
        <button type='submit' className='add-button'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
