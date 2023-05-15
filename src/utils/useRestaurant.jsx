import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const data = await fetch(FETCH_MENU_URL + restaurantId);
    const json = await data.json();
    const menuItemList = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    const nestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0].card.card);

    const menu = menuItemList.map((item)=>{
      if((item.card.card["@type"]===itemCategory) || (item.card.card["@type"]===nestedItemCategory)){ //card["@type"] here @type is a key and we can access it value by doing this
        return item.card.card;
      }
    })

    //we are grouping the data as below because we dont want to send whole api data to components rathers we want to send the specifics as required as per the functionality
    const modifiedData = {
      info : json.data.cards[0].card.card.info,
      menu : menu.filter(value => value !== undefined)
    };

    setRestaurant(modifiedData)
  } catch (error) {
    console.log(error)
  }

}

  //return restaurant Data
  return restaurant;
};

export default useRestaurant;
