import { useDispatch } from "react-redux";
import { FOOD_ITEM_URL, IMG_CDN_URL } from "../config";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";
import ItemQuantity from "./ItemQuantity";
// import useItemTotal from "../utils/useItemTotal";





const FoodItem = ({ item }) => {

  // const getItemsTotal = useItemTotal();

  const {id, name, description, imageId, price} = item;

    const [itemsCount , setItemsCount] = useState(0);

    const dispatch = useDispatch();

    const handleAddItem = (foodItem) => {
        dispatch(addItem(foodItem));
        setItemsCount(itemsCount+1);
    }

    const handleRemoveItem = (id) => {
      let updatedCount;
        dispatch(removeItem(id));
        updatedCount = itemsCount > 0 ? itemsCount - 1 : 0;
        setItemsCount(updatedCount);
    }




  return (
    <div className="flex">
       <div className="w-[200px] m-2 p-2 shadow-lg bg-blue-100">
        <div className="">
          <div>
            <img src={FOOD_ITEM_URL + imageId} alt="" />
          </div>
          <div className="font-bold text-2xl">
            {" "}
            <h1>{name}</h1>
          </div>
          <div>
            {" "}
            <h2>{description}</h2>
          </div>
          <div>
            <p>{price / 100}</p>
          </div>
          <div>
            <button onClick={()=>handleRemoveItem(id)}>-</button>
          </div>
          {itemsCount}
          <div>
            <button onClick={()=>handleAddItem(item)}>+</button>
          </div>
        </div>
       
    </div>
    {/* <div>
          {(itemsCount===0)?(<div>"Food is cooking"</div>):(<div>
          <h1>{name}</h1>
          <h2>{price/100*itemsCount}</h2> 
          </div>)}
        </div> */}

  
    </div>
   
  );
};

export default FoodItem;
