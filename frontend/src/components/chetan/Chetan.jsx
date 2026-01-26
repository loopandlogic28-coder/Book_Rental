
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
//       setCategory(""); // Clear category when searching
//     }
//   }, [searchQuery]);

//   const handleCategoryChange = (cat) => {
//     setCategory(cat);
//     navigate('/exploreall');
//   };

//   // --- 🧠 DEBUGGING: Log data states ---
//   console.log("🔎 Current category selected:", category);
//   console.log("📚 Total items fetched:", food_list.length);
//   if (food_list.length > 0) console.log("🧾 Sample data:", food_list[0]);

//   // --- 🧩 FIX: Case-insensitive + trimmed matching ---
//   const filteredFoodList = searchQuery
//     ? food_list.filter(item =>
//         item.name.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : (category === "All"
//         ? food_list
//         : food_list.filter(item =>
//             item.category?.trim().toLowerCase() === category.trim().toLowerCase()
//           )
//       );

//   // --- 🧠 Debug filtered result ---
//   console.log("✅ Filtered results:", filteredFoodList);

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


/// all set hai ppar wala deployed hai but na filterr button add kar rahe hai tohh 

// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import { menu_list } from '../../assets/assets';
// import FoodItem from '../FoodItem/FoodItem';
// import './Chetan.css';

// const Chetan = () => {
//   const { food_list } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [authorFilter, setAuthorFilter] = useState("All Authors");
//   const [authors, setAuthors] = useState([]);

//   /* Extract authors when category changes */
//   useEffect(() => {
//     const filteredByCategory =
//       selectedCategory === "All"
//         ? food_list
//         : food_list.filter(
//             item =>
//               item.category?.trim().toLowerCase() ===
//               selectedCategory.trim().toLowerCase()
//           );

//     const extractedAuthors = filteredByCategory
//       .map(item => {
//         const match = item.description?.match(/Author\s*\(([^)]+)\)/i);
//         return match ? match[1].trim() : null;
//       })
//       .filter(Boolean);

//     setAuthors([...new Set(extractedAuthors)]);
//     setAuthorFilter("All Authors");
//   }, [food_list, selectedCategory]);

//   /* Filter food list */
//   const filteredFoodList = food_list.filter(item => {
//     const matchesCategory =
//       selectedCategory === "All"
//         ? true
//         : item.category?.trim().toLowerCase() ===
//           selectedCategory.trim().toLowerCase();

//     const matchesAuthor =
//       authorFilter === "All Authors"
//         ? true
//         : item.description
//             ?.toLowerCase()
//             .includes(authorFilter.toLowerCase());

//     return matchesCategory && matchesAuthor;
//   });

//   return (
//     <div className="chetan-page">

//       {/* ===== Circle Category Filters (FROM assets.js) ===== */}
//       <div className="circle-filters">
//         {menu_list.map((menu, idx) => (
//           <div
//             key={idx}
//             className={`circle-filter ${
//               selectedCategory === menu.menu_name ? 'active' : ''
//             }`}
//             onClick={() =>
//               setSelectedCategory(
//                 selectedCategory === menu.menu_name
//                   ? "All"
//                   : menu.menu_name
//               )
//             }
//           >
//             <img src={menu.menu_image} alt={menu.menu_name} />
//             <span>{menu.menu_name}</span>
//           </div>
//         ))}
//       </div>

//       <hr className="filter-divider" />

//       {/* ===== Header + Author Filter (ALWAYS VISIBLE) ===== */}
//       <div className="filter-header">
//         <h2 className="chetan-heading">
//           {selectedCategory === "All" ? "All Items" : selectedCategory}
//         </h2>

//         <div className="author-filter-small">
//           <select
//             value={authorFilter}
//             onChange={e => setAuthorFilter(e.target.value)}
//           >
//             <option>All Authors</option>
//             {authors.map((author, idx) => (
//               <option key={idx}>{author}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* ===== Items Grid ===== */}
//       <div className="chetan-food-list">
//         {filteredFoodList.length === 0 ? (
//           <p className="no-results">No items found!</p>
//         ) : (
//           filteredFoodList.map(item => (
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

// best ui k sath kar rha try uppar wlaa bhi ok hai but searhc work nhi karta uske uppar wala god hai 

import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { menu_list } from '../../assets/assets';
import FoodItem from '../FoodItem/FoodItem';
import NoResults from '../NoResults/NoResults';
import './Chetan.css';

const Chetan = () => {
  const { food_list } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  /* ===== Search from URL ===== */
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [authorFilter, setAuthorFilter] = useState("All Authors");
  const [authors, setAuthors] = useState([]);

  /* ===== Clear category when searching ===== */
  useEffect(() => {
    if (searchQuery) {
      setSelectedCategory("All");
      setAuthorFilter("All Authors");
    }
  }, [searchQuery]);

  /* ===== Extract authors based on category ===== */
  useEffect(() => {
    const filteredByCategory =
      selectedCategory === "All"
        ? food_list
        : food_list.filter(
            item =>
              item.category?.trim().toLowerCase() ===
              selectedCategory.trim().toLowerCase()
          );

    const extractedAuthors = filteredByCategory
      .map(item => {
        const match = item.description?.match(/Author\s*\(([^)]+)\)/i);
        return match ? match[1].trim() : null;
      })
      .filter(Boolean);

    setAuthors([...new Set(extractedAuthors)]);
    setAuthorFilter("All Authors");
  }, [food_list, selectedCategory]);

  /* ===== Final Filtering Logic ===== */
  const filteredFoodList = food_list.filter(item => {
    const matchesSearch = searchQuery
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : item.category?.trim().toLowerCase() ===
          selectedCategory.trim().toLowerCase();

    const matchesAuthor =
      authorFilter === "All Authors"
        ? true
        : item.description
            ?.toLowerCase()
            .includes(authorFilter.toLowerCase());

    return matchesSearch && matchesCategory && matchesAuthor;
  });

  return (
    <div className="chetan-page">

      {/* ===== Circle Category Filters ===== */}
      <div className="circle-filters">
        {menu_list.map((menu, idx) => (
          <div
            key={idx}
            className={`circle-filter ${
              selectedCategory === menu.menu_name ? 'active' : ''
            }`}
            onClick={() => {
              setSelectedCategory(
                selectedCategory === menu.menu_name ? "All" : menu.menu_name
              );
              navigate('/exploreall');
            }}
          >
            <img src={menu.menu_image} alt={menu.menu_name} />
            <span>{menu.menu_name}</span>
          </div>
        ))}
      </div>

      <hr className="filter-divider" />

      {/* ===== Header + Author Filter ===== */}
      <div className="filter-header">
        <h2 className="chetan-heading">
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : selectedCategory === "All"
            ? "All Items"
            : selectedCategory}
        </h2>

        <div className="author-filter-small">
          <select
            value={authorFilter}
            onChange={e => setAuthorFilter(e.target.value)}
          >
            <option>All Authors</option>
            {authors.map((author, idx) => (
              <option key={idx}>{author}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ===== Items Grid / No Results ===== */}
      <div className="chetan-food-list">
        {filteredFoodList.length === 0 ? (
          <NoResults />
        ) : (
          filteredFoodList.map(item => (
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
