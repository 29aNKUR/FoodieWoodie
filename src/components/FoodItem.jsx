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
    <div className="">
       <div className="w-full p-[2rem] flex justify-between">
     
        
          <div className="w-4/5">
            <h1 className="font-bold text-xl ">{name}</h1>
           <h2>{description}</h2>
            <p>{String(price / 100)}</p>
          </div>
  
          <div className="w-1/5">
           <img src={FOOD_ITEM_URL + imageId} alt="" /> 
           <div className="flex justify-evenly text-green-600 border border-green-600">    <button onClick={()=>handleRemoveItem(id)}>-</button>   
          {itemsCount}    
            <button onClick={()=>handleAddItem(item)}>+</button></div>    
        
          </div>   
           
      
       
    </div>
    {/* <div>
          {(itemsCount===0)?(<div>"Food is cooking"</div>):(<div>
          <h1>{name}</h1>
          <h2>{price/100*itemsCount}</h2> 
          </div>)}
        </div> */}
   <hr/> 
</div>
   
  );
};

export default FoodItem;
