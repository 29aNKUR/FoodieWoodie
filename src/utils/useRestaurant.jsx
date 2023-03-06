import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + restaurantId);
    const json = await data.json();
    // console.log(json);
    setRestaurant(json.data);
  }

  //return restaurant Data
  return restaurant;
};

export default useRestaurant;
