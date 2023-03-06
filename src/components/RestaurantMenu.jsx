import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config.jsx";
import Shimmer from "../Shimmer.jsx";
import useRestaurant from "../utils/useRestaurant.jsx";


const RestaurantMenu = () => {
  //how to read dynamic URL using params
  const params = useParams();
  const { resId } = params;

  // const [restaurants, setRestaurants] = useState(null); //restaurant data is object thats why we are passing empty object in useState

  const restaurants = useRestaurant(resId); // restaurants is just a variable


  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id:{resId}</h1>
        <h2>{restaurants.name}</h2>
        <img src={IMG_CDN_URL + restaurants.cloudinaryImageId} alt="logo" />
        <h3>{restaurants.area}</h3>
        <h3>{restaurants.city}</h3>
        <h3>{restaurants.avgRatingString} Stars</h3>
        <h3>{restaurants.costForTwoMsg}</h3>

      </div>
      <div>
        {/* {console.log} */}
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurants?.menu?.items).map(
            (
              item 
              //optional chaining because object is empty in the starting but we are still calling values from it
            ) => (
              <li key={item.id}>{item.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
