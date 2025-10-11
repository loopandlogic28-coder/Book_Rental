
// import React, { useEffect, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { StoreContext } from '../../context/StoreContext';
// import './ProductsYouMayLike.css';

// const ProductsYouMayLike = ({ productId }) => {
//   const { url } = useContext(StoreContext);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     const fetchRelatedProducts = async () => {
//       try {
//         const response = await axios.get(`${url}/api/food/related/${productId}`);
//         setRelatedProducts(response.data.data.slice(0, 3));
//       } catch (error) {
//         console.error('Error fetching related products:', error);
//       }
//     };

//     if (productId) {
//       fetchRelatedProducts();
//     }
//   }, [productId, url]);

//   return (
//     <section className="youmaylike-products-section">
//       <div className="youmaylike-container">
//         <div className="youmaylike-section-header">
//           <h1>Products You May Like</h1>
//         </div>
//         <div className="youmaylike-products-grid">
//           {relatedProducts.map((relatedProduct) => (
//             <div className="youmaylike-product-card" key={relatedProduct._id}>
//               <Link to={`/product-detail/${relatedProduct._id}`} className="youmaylike-product-link">
//                 <img
//                   alt={relatedProduct.name}
//                   className="youmaylike-product-image"
//                   src={`${url}/images/${relatedProduct.image}`}
//                 />
//                 <div className="youmaylike-product-info">
//                   <h2>{relatedProduct.name}</h2>
//                   <p className="youmaylike-product-price">${relatedProduct.price}</p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsYouMayLike;

// uppar ka og hai neche ka gpt ka hai proper design wala 


import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import './ProductsYouMayLike.css';

const ProductsYouMayLike = ({ productId }) => {
  const { url } = useContext(StoreContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(`${url}/api/food/related/${productId}`);
        setRelatedProducts(response.data.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    if (productId) {
      fetchRelatedProducts();
    }
  }, [productId, url]);

  // Helper to truncate description
  const truncate = (text, limit) => {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  return (
    <section className="youmaylike-products-section">
      <div className="youmaylike-container">
        <div className="youmaylike-section-header">
          <h1>Products You May Like</h1>
        </div>
        <div className="youmaylike-products-grid">
          {relatedProducts.map((relatedProduct) => (
            <div className="youmaylike-product-card" key={relatedProduct._id}>
              <Link to={`/product-detail/${relatedProduct._id}`} className="youmaylike-product-link">
                <img
                  alt={relatedProduct.name}
                  className="youmaylike-product-image"
                  src={`${url}/images/${relatedProduct.image}`}
                />
                <div className="youmaylike-product-info">
                  <h2>{relatedProduct.name}</h2>
                  <p className="youmaylike-product-description">
                    {truncate(relatedProduct.description, 80)}
                  </p>
                  <p className="youmaylike-product-price">₹{relatedProduct.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsYouMayLike;
