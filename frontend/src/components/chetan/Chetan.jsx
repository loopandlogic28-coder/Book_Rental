/*import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Chetan = () => {
const [category,setCategory] = useState("All");
  return (
    <div>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus perferendis officia tempore asperiores incidunt? Itaque et cupiditate iste nam, quos quam magnam. Asperiores aut sed assumenda, necessitatibus reprehenderit quaerat.
    </div>
  )
}

export default Chetan */

// yehhh use able hai but iske neeeche wala search button k tesitn k liye hia 
/*
import React, { useContext , useState} from 'react';

import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import ExploreMenu from '../ExploreMenu/ExploreMenu';

const Chetan = () => {
  const [category,setCategory] = useState("All");
  const { food_list } = useContext(StoreContext);

  return (
    <div className='all-items-page'>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <h2>All Food Items</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Chetan;

*/

// search buttom testing 
// Chetan.jsx
// yeh bhi hai but iske baad wala testing k liye kar hra hun yeh bhi acha hai esting ka hi hai but kaisa yeh chalaga gay toh in case woh nahi hua toh usk eliey 
/*
import React, { useContext , useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import ExploreMenu from '../ExploreMenu/ExploreMenu';

import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Chetan = () => {
  const [category,setCategory] = useState("All");
  const { food_list } = useContext(StoreContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  const filteredFoodList = food_list.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='all-items-page'>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <h2>All Food Items</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Chetan;
*/

/*
import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import ExploreMenu from '../ExploreMenu/ExploreMenu';

const Chetan = () => {
  const [category, setCategory] = useState("All");
  const { food_list } = useContext(StoreContext);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  useEffect(() => {
    if (searchQuery) {
      setCategory(""); // Clear category when there is a search query
    }
  }, [searchQuery]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    // Clear search query from URL when a category is selected
    navigate('/chetan');
  };

  const filteredFoodList = searchQuery 
    ? food_list.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())) 
    : (category === "All" 
        ? food_list 
        : food_list.filter(item => item.category === category)
      );

  return (
    <div className='all-items-page'>
      <ExploreMenu 
        category={category} 
        setCategory={handleCategoryChange} 
        clearSearch={() => navigate('/chetan')}
      />
      <h2>{searchQuery ? "Search Results" : "All Food Items"}</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Chetan;
*/

// no result 

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
      setCategory(""); // Clear category when there is a search query
    }
  }, [searchQuery]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    // Clear search query from URL when a category is selected
    navigate('/exploreall');
  };

  const filteredFoodList = searchQuery 
    ? food_list.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())) 
    : (category === "All" 
        ? food_list 
        : food_list.filter(item => item.category === category)
      );

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
