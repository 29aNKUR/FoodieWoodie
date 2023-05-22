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

  const dispatch = useDispatch();

  // const handleAddItem = ()=>{
  //     dispatch(addItem("grapes"));
  // }

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  }

  // const [restaurants, setRestaurants] = useState(null); //restaurant data is object thats why we are passing empty object in useState

  const restaurants = useRestaurant(resId); 
  // console.log((restaurants.menu[0]["itemCards"][0].card.info.name))// restaurants is just a variable
  // console.log(typeof(restaurants))

  // console.log(restaurants.info["cloudinaryImageId"])


  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="">
      {/* <div>
        <h1>Restaurant id:{resId}</h1>
        <h2>{restaurants.name}</h2>
        <img src={IMG_CDN_URL + restaurants.cloudinaryImageId} alt="logo" />
        <h3>{restaurants.area}</h3>
        <h3>{restaurants.city}</h3>
        <h3>{restaurants.avgRatingString} Stars</h3>
        <h3>{restaurants.costForTwoMsg}</h3>
      </div> */}
      <RestaurantInfo {...restaurants.info}/>
      <div>
      <RestaurantMenuList menu = {restaurants.menu} />
      </div>
      
      
      {/* handleAddItem is just to check the dispatch functionality */}
      {/* <div>
      <button className="p-2 m-5 bg-green-100" onClick={()=>handleAddItem()}>add item</button>
      </div> */}
      <div className="p-5">
        
        <ul>
          {/* {Object.values(restaurants.map((items)=>items.card.info)).map(
            (
              item 
              //optional chaining because object is empty in the starting but we are still calling values from it
            ) => (
              <li key={item.id}>{item.name} - <button className="bg-blue-100" onClick={()=>addFoodItem(item)}>Add Item</button></li>
            )
          )} */}

          
            {/* {Object.values(restaurants?.menu).map((item)=>item?.itemCards?.map((dish,i)=><li key={i}>{dish?.card?.info?.name}<button className="bg-blue-100" onClick={()=>addFoodItem(item)}>Add Item</button></li>))} */}
          

          
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
