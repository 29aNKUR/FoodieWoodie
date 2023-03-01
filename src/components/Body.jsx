import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import Shimmer from "../Shimmer";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

//Ye nahi karna hai
// function filterData(searchText, restaurants) {
//   return restaurants.filter((restaurant) =>{
//     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
// });
// }

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6678179&lng=75.8904979&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //conditional Rendering
  //if restaurant is empty => shimmer UI
  //if restaurant has data => actual data UI

  //not render component(Early return)
  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length === 0)
  // return <h1>No Restaurant match your filter!!</h1>

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
