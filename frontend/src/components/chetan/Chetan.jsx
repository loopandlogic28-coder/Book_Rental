

// // no result 

// import React, { useContext, useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';
// import ExploreMenu from '../ExploreMenu/ExploreMenu';
// import NoResults from '../NoResults/NoResults'; // Import the NoResults component


// const Chetan = () => {
//   const [category, setCategory] = useState("All");
//   const { food_list } = useContext(StoreContext);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const queryParams = new URLSearchParams(location.search);
//   const searchQuery = queryParams.get('search') || '';

//   useEffect(() => {
//     if (searchQuery) {
//       setCategory(""); // Clear category when there is a search query
//     }
//   }, [searchQuery]);

//   const handleCategoryChange = (cat) => {
//     setCategory(cat);
//     // Clear search query from URL when a category is selected
//     navigate('/exploreall');
//   };

//   const filteredFoodList = searchQuery 
//     ? food_list.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())) 
//     : (category === "All" 
//         ? food_list 
//         : food_list.filter(item => item.category === category)
//       );

//   return (
//     <div className='all-items-page'>
//       <ExploreMenu 
//         category={category} 
//         setCategory={handleCategoryChange} 
//         clearSearch={() => navigate('/exploreall')}
//       />
//       <h2>{searchQuery ? "Search Results" : "All Items"}</h2>
//       <div className="food-display-list">
//         {filteredFoodList.length === 0 ? (
          
//           <NoResults />
          
//         ) : (
//           filteredFoodList.map((item) => (
            
//             <FoodItem
             
//               key={item._id}
//               id={item._id}
//               name={item.name}
//               description={item.description}
//               price={item.price}
//               image={item.image}
//             />
            
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chetan;


// category wise fetching chetan 

import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import NoResults from '../NoResults/NoResults'; // Import the NoResults component

const Chetan = () => {
  const [category, setCategory] = useState("All");
  const { food_list } = useContext(StoreContext);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  useEffect(() => {
    if (searchQuery) {
      setCategory(""); // Clear category when searching
    }
  }, [searchQuery]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    navigate('/exploreall');
  };

  // --- 🧠 DEBUGGING: Log data states ---
  console.log("🔎 Current category selected:", category);
  console.log("📚 Total items fetched:", food_list.length);
  if (food_list.length > 0) console.log("🧾 Sample data:", food_list[0]);

  // --- 🧩 FIX: Case-insensitive + trimmed matching ---
  const filteredFoodList = searchQuery
    ? food_list.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : (category === "All"
        ? food_list
        : food_list.filter(item =>
            item.category?.trim().toLowerCase() === category.trim().toLowerCase()
          )
      );

  // --- 🧠 Debug filtered result ---
  console.log("✅ Filtered results:", filteredFoodList);

  return (
    <div className='all-items-page'>
      <ExploreMenu 
        category={category} 
        setCategory={handleCategoryChange} 
        clearSearch={() => navigate('/exploreall')}
      />

      <h2>{searchQuery ? "Search Results" : "All Items"}</h2>

      <div className="food-display-list">
        {filteredFoodList.length === 0 ? (
          <NoResults />
        ) : (
          filteredFoodList.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Chetan;
