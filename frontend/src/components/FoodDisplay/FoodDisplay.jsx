

// ///
// import React, { useContext, useState, useEffect } from 'react';
// import './FoodDisplay.css';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';
// import { useNavigate } from 'react-router-dom';

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [cardsToShow, setCardsToShow] = useState(6);

//   const handleFoodItemClick = (itemId) => {
//     navigate(`/product-detail/${itemId}`);
//   };

//   const handleViewMore = () => {
//     navigate('/exploreall');
//   };

//   // Listen for window resize and set number of cards
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width <= 768) setCardsToShow(4);          // Mobile
//       else if (width > 768 && width <= 1920) setCardsToShow(6); // Normal desktop
//       else setCardsToShow(9);                       // Large desktop
//     };

//     handleResize(); // initial check
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className='food-display' id='food-display'>
//       <div className="section-divider"></div>
//       <h2>Featured Books for You</h2>

//       <div className="food-display-list">
//         {food_list
//           .filter(item => category === "All" || category === item.category)
//           .slice(0, cardsToShow)
//           .map((item) => (
//             <FoodItem
//               key={item._id}
//               id={item._id}
//               name={item.name}
//               description={item.description}
//               price={item.price}
//               image={item.image}
//               onItemClick={() => handleFoodItemClick(item._id)}
//             />
//           ))}
//       </div>

//       <div className="view-more-container">
//         <button className="view-more-btn" onClick={handleViewMore}>
//           View More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;



// category wise fetchgin chetan

import React, { useContext, useState, useEffect } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { useNavigate } from 'react-router-dom';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const navigate = useNavigate();
  const [cardsToShow, setCardsToShow] = useState(6);

  const handleFoodItemClick = (itemId) => {
    navigate(`/product-detail/${itemId}`);
  };

  const handleViewMore = () => {
    navigate('/exploreall');
  };

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) setCardsToShow(4);
      else if (width > 768 && width <= 1920) setCardsToShow(6);
      else setCardsToShow(9);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🧠 Debug info
  console.log("🎯 FoodDisplay - Category:", category);
  console.log("📦 All items count:", food_list.length);

  const filteredList = food_list
    .filter(
      (item) =>
        category === "All" ||
        (item.category &&
          item.category.toLowerCase().trim() === category.toLowerCase().trim())
    )
    .slice(0, cardsToShow);

  console.log("📘 Filtered list in FoodDisplay:", filteredList);

  return (
    <div className='food-display' id='food-display'>
      <div className="section-divider"></div>
      <h2>Featured Books for You</h2>

      <div className="food-display-list">
        {filteredList.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            onItemClick={() => handleFoodItemClick(item._id)}
          />
        ))}
      </div>

      <div className="view-more-container">
        <button className="view-more-btn" onClick={handleViewMore}>
          View More
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;
