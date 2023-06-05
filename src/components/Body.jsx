import React from "react";
import { useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import axios from "axios";


const Body = () => {
  const { user, setUser } = useContext(UserContext);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);

  useEffect(() => {
    //we can have multiple useEffect in our code
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6678179&lng=75.8904979&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await data.json();
    // console.log(json);

    const response = await axios
    .get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6678179&lng=75.8904979&page_type=DESKTOP_WEB_LISTING")
    .catch((err)=>{
      if(err){
        // console.log(err.response)
        alert("Something is wrong with Fetching API. Please toggle on your CORS ext")
      }
    })

    if(response){
      // console.log(response);
         setAllRestaurants(response?.data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(response?.data?.data?.cards[2]?.data?.data?.cards);
    }
    //optional chaining
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const online = useOnline();

  if (!online) {
    return <h1>🔴You are not connected to the Internet!</h1>;
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
      <div className="p-5 my-5 flex justify-center">
        <input
          type="text"
          className="m-2 p-2 w-72 focus:bg-slate-200 border rounded-md" 
          placeholder="Search for your favourite Restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="m-2 p-2 bg-gray-500 text-white rounded-md hover:bg-slate-400"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        {/* <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "ankursemle@gmail.com",
            })
          }
        /> */}

        {/* <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "ankursemle@gmail.com",
            })
          }
        /> */}

        {/* using spread operator */}
        {/* <input
        placeholder="name"
          type="text"
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />

        <input className="m-2" placeholder="email"
          type="text"
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        /> */}
      </div>
      <div className="flex flex-wrap p-5 ml-16">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <div className="m-7"><RestaurantCard {...restaurant.data} /></div>
              
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
