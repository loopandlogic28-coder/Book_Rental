// these is og and ok but still  below one is for testing the search stuff\

import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Collection</h1>
        <p className='explore-menu-text'>Browse through our wide range of books available for rental or purchase. 
          Find your next read, from fiction and non-fiction to comics and novels!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)  }key={index} className="explore-menu-list-item" >
                     
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        
                        <p>{item.menu_name}</p>
                       
                    </div>
                )
            })}
            </div>     
            <hr/> 
    </div>
  )
}

export default ExploreMenu

/*
import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory, clearSearch }) => {
  const handleCategorySelect = (item) => {
    setCategory(prev => prev === item.menu_name ? "All" : item.menu_name);
    clearSearch();
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => handleCategorySelect(item)}
            key={index}
            className="explore-menu-list-item"
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
*/