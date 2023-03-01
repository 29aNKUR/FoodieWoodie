import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config.jsx";
import Shimmer from "../Shimmer.jsx";

const RestaurantMenu = () => {
  //how to read dynamic URL using params
  const params = useParams();
  const { resId } = params;

  const [restaurants, setRestaurants] = useState(null); //restaurant data is object thats why we are passing empty object in useState

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=22.6678179&lng=75.8904979&menuId="+resId
    );
    const json = await data.json();
    // console.log(json);
    setRestaurants(json.data);
  }

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
