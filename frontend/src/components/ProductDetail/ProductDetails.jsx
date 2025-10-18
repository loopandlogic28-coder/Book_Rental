

// import React, { useState, useEffect, useContext } from 'react';
// import './ProductDetails.css';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import { FaPlus, FaMinus } from 'react-icons/fa';
// import ProductsYouMayLike from '../ProductYouMayLike/ProductsYouMayLike';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { addToCart, removeFromCart, cartItems, url } = useContext(StoreContext);
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`${url}/api/food/${id}`);
//         setProduct(response.data.data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id, url]);

//   useEffect(() => {
//     setQuantity(cartItems[id] || 0);
//   }, [cartItems, id]);

//   const handleAddToCart = () => {
//     addToCart(id);
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   const handleRemoveFromCart = () => {
//     if (quantity > 0) {
//       removeFromCart(id);
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   const handleBuyNow = () => {
//     if (Object.keys(cartItems).length > 0) {
//       navigate('/cart');
//     } else {
//       alert('Please add at least one item to the cart before proceeding.');
//     }
//   };

//   if (!product) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <>
//       <div className="product-detail">
//         <div className="product-image">
//           <div className="product-image-card">
//             <img src={`${url}/images/${product.image}`} alt={product.name} />
//           </div>
//         </div>

//         <div className="product-info">
//           <div className="product-header">
//             <h1>{product.name}</h1>
//             <div className="product-reviews">
//               <span className="stars">★★★★☆</span> (4.0)
//             </div>
//           </div>

//           <div className="product-quantity">
//             <button className="icon-button" onClick={handleRemoveFromCart}>
//               <FaMinus />
//             </button>
//             <span>{quantity}</span>
//             <button className="icon-button" onClick={handleAddToCart}>
//               <FaPlus />
//             </button>
//           </div>

//           <div className="product-actions">
//             <button className="buy-now-button" onClick={handleBuyNow}>
//               Buy Now
//             </button>
//             <button
//               className="rent-now-button"
//               onClick={() => navigate(`/rent/${id}`)}
//             >
//               Rent Now
//             </button>
//           </div>

//           <div className="product-description">
//             <h2>Description</h2>
//             <p>{product.description}</p>
//           </div>

//           <div className="product-price">
//             <h2>Price:</h2>
//             <p>₹{product.price}</p>
//           </div>
//         </div>
//       </div>
//       <ProductsYouMayLike productId={id} />
//     </>
//   );
// };

// export default ProductDetail;


// old wala hai sai hai but mere hi ugli hai jo chnge krr rha warna sahi hai sif buttons lgbtq hai bss 

import React, { useState, useEffect, useContext } from 'react';
import './ProductDetails.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ProductsYouMayLike from '../ProductYouMayLike/ProductsYouMayLike';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems, url } = useContext(StoreContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/api/food/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, url]);

  useEffect(() => {
    setQuantity(cartItems[id] || 0);
  }, [cartItems, id]);

  const handleAddToCart = () => {
    addToCart(id);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      removeFromCart(id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuyNow = () => {
    if (Object.keys(cartItems).length > 0) {
      navigate('/cart');
    } else {
      alert('Please add at least one item to the cart before proceeding.');
    }
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <div className="product-image-card">
            {/* <img src={`${url}/images/${product.image}`} alt={product.name} /> */}  
            {/* uppar wala cloudinary k bina hai  */}
            <img src={product.image} alt={product.name} />

          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1>{product.name}</h1>
            <div className="product-reviews">
              <span className="stars">★★★★☆</span> (4.0)
            </div>
          </div>

          <div className="product-quantity">
            <button className="icon-button" onClick={handleRemoveFromCart}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button className="icon-button" onClick={handleAddToCart}>
              <FaPlus />
            </button>
          </div>

          <div className="product-actions">
            <button className="buy-now-button" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button
              className="rent-now-button"
              onClick={() => navigate(`/rent/${id}`)}
            >
              Rent Now
            </button>
          </div>

          <div className="product-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="product-price">
            <h2>Price:</h2>
            <p>₹{product.price}</p>
          </div>
        </div>
      </div>
      <ProductsYouMayLike productId={id} />
    </>
  );
};

export default ProductDetail;
