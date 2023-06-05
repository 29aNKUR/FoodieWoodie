import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config.jsx";
import Shimmer from "../Shimmer.jsx";
import { addItem } from "../utils/cartSlice.jsx";
import useRestaurant from "../utils/useRestaurant.jsx";
import RestaurantInfo from "./RestaurantInfo.jsx";
import RestaurantMenuList from "./RestaurantMenuList.jsx";

const RestaurantDetails = () => {
  //how to read dynamic URL using params
  const params = useParams();
  const { resId } = params;


  const restaurants = useRestaurant(resId);
  console.log(restaurants?.menu[0])

  // restaurants?.menu[0].info ke bad agar price nhi he to condition lgani h

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div>
      <RestaurantInfo {...restaurants.info} />
   
        <RestaurantMenuList menu={restaurants.menu} />



    </div>
  );
};

export default RestaurantDetails;
