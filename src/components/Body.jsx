import React from "react";
import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from 'react';

function filterData(searchText,restaurants){
    return restaurants.filter((restaurant)=>{
      restaurant.data.name.includes(searchText);
    })
}

const Body = () => {
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);

  fetch()

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => {
          const data = filterData(searchText,allRestaurants);
          setFilteredRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {/* function getRestaurants(){
        const 
    }

     useEffect(()=>{getRestaurants},[]); */}

        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        {/* <RestaurantCard/> */}
      </div>
    </>
  );
};

export default Body;
