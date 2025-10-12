// // og

// import React, { useContext} from 'react' //og OG original 
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'
// const FoodItem = ({id,name,price,description,image}) => {

// const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={url+"/images/"+image} alt="" />

//             {
//               !cartItems[id]
//               ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
//               : <div className='food-item-counter'>
//                 <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                 <p>{cartItems[id]}</p>
//                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
//                 </div>
//             }
//         </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//             <p>{name}</p>
//             <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">₹ {price}</p>
//       </div>
//     </div>
//   )
// }
 
// export default FoodItem    


// chetan testing 

// yeh wala hai click karne pe new page open hone wala 
// done hai yeh 


// import React, { useContext } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/StoreContext';
// import { Link } from 'react-router-dom';

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     addToCart(id);
//   };

//   const handleRemoveFromCart = (e) => {
//     e.preventDefault();
//     removeFromCart(id);
//   };

//   return (
//     <Link to={`/product-detail/${id}`} className="food-item">
//       <div className="food-item-img-container">
//         <img className='food-item-image' src={url + "/images/" + image} alt={name} />
//         {
//           !cartItems[id]
//             ? <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt="Add to Cart" />
//             : <div className='food-item-counter'> 
//               <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="Remove from Cart" /> 
//               <p>{cartItems[id]}</p>
//               <img onClick={handleAddToCart} src={assets.add_icon_green} alt="Add to Cart" /> 
//             </div>
//         }
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="Rating" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </Link>
//   );
// };

// export default FoodItem;

// clcik karne pe woing thaa but erorr aqtta tha project reopen karne pe tohh 


// import React, { useContext } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/StoreContext';
// import { Link } from 'react-router-dom';

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart, url, loading } = useContext(StoreContext);

//   if (loading) {
//     return <div className="food-item loading">Loading...</div>;
//   }

//   // ✅ prevent errors if cartItems is still undefined
//   const itemCount = cartItems?.[id] || 0;

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     addToCart(id);
//   };

//   const handleRemoveFromCart = (e) => {
//     e.preventDefault();
//     removeFromCart(id);
//   };

//   return (
//     <Link to={`/product-detail/${id}`} className="food-item">
//       <div className="food-item-img-container">
//         <img className='food-item-image' src={url + "/images/" + image} alt={name} />
//         {!itemCount ? (
//           <img
//             className='add'
//             onClick={handleAddToCart}
//             src={assets.add_icon_white}
//             alt="Add to Cart"
//           />
//         ) : (
//           <div className='food-item-counter'>
//             <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="Remove" />
//             <p>{itemCount}</p>
//             <img onClick={handleAddToCart} src={assets.add_icon_green} alt="Add" />
//           </div>
//         )}
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="Rating" />
//         </div>
//         {/* <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p> */}

//         <p className="food-item-desc">
//   {description.length > 150 ? description.substring(0, 150) + "..." : description}
// </p>
// <p className="food-item-price">₹ {price}</p>
//       </div>
//     </Link>
//   );
// };

// export default FoodItem;

import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url, loading } = useContext(StoreContext);

  if (loading) {
    return <div className="food-item loading">Loading...</div>;
  }

  const itemCount = cartItems?.[id] || 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(id);
  };

  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    removeFromCart(id);
  };

  return (
    <Link to={`/product-detail/${id}`} className="food-item">
      <div className="food-item-img-container">
        <img className='food-item-image' src={url + "/images/" + image} alt={name} />
        {!itemCount ? (
          <img
            className='add'
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            alt="Add to Cart"
          />
        ) : (
          <div className='food-item-counter'>
            <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="Remove" />
            <p>{itemCount}</p>
            <img onClick={handleAddToCart} src={assets.add_icon_green} alt="Add" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹ {price}</p>
      </div>
    </Link>
  );
};

export default FoodItem;
