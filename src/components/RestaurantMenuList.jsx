import React from "react";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
import RestaurantItemCategory from "./RestaurantItemCategory";
import useItemTotal from "../utils/useItemTotal";
import { useDispatch, useSelector } from "react-redux";
import ItemQuantity from "./ItemQuantity";
import cookingFood from "../assets/img/cookingFood.jpg";

const RestaurantMenuList = ({ menu }) => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const getItemsTotal = useItemTotal();

  return (
    <div>
      <div className="flex justify-evenly">
        <div>
          {" "}
          {menu &&
            menu.map((item, index) => (
              <div className="" key={index}>
                {item?.categories ? (
                  <RestaurantNestedItemCategory nestedCategory={item} />
                ) : (
                  <RestaurantItemCategory category={item} />
                )}
              </div>
            ))}
        </div>

        { Object.values(cartItems).length < 1 ? (<div><img className="w-[200px] h-[200px]" src={cookingFood}></img></div>) : (          
        <div>
          <h1 className="font-bold text-xl">Cart</h1>
          <div><h1>{Object.values(cartItems).length} items</h1></div>
          {Object.values(cartItems).map((item,index) => {
            return (
              <div className="flex justify-evenly" key={index}>
 
             
              <div>
              <h1 className="mx-2">{item?.name}</h1>
              </div>

              <div>
                <ItemQuantity item={item} />
               </div>

              <div>
                
              <h2 className="mx-2">{item?.price / 100 * item?.quantity}</h2>
              </div>
             
           
              </div>
            );
          })}
          <span className="mx-2">Sub Total</span>
          {getItemsTotal()}
        </div>
)}
      </div>
    </div>
  );
};

export default RestaurantMenuList;
