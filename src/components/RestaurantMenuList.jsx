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
        <div className="border mx-3 shadow-lg">
          {" "}
          {menu &&
            menu.map((item, index) => (
              <div className="m-[2rem]" key={index}>
                {item?.categories ? (
                  <RestaurantNestedItemCategory nestedCategory={item} />
                ) : (
                  <RestaurantItemCategory category={item} />
                )}
              </div>
            ))}
        </div>

        {Object.values(cartItems).length < 1 ? (
          <div className="w-2/5 border-2">
          <div className="mx-[5rem] justify-center">
            <img className="w-[200px] h-[200px]" src={cookingFood} alt="cooking food logo" />
            <h1 className="w-3/5 flex-col justify-center align-middle">Delicious food is always cooking. Go ahead order some!!</h1>
          </div>
  
        
   
       

          </div>
   
      
       
        ) : (
          <div className="w-3/5 border-2 shadow-lg justify-center  mx-[2rem]">
            <h1 className="font-bold text-xl p-[0.5rem]">Cart</h1>
            <div className="p-[0.5rem]">
              <h1>{Object.values(cartItems).length} items</h1>
            </div>
            {Object.values(cartItems).map((item, index) => {
              return (
                <div
                  className="flex justify-between w-full my-[1rem] px-[0.5rem]"
                  key={index}
                >
                  <div className="w-2/5">
                    <h1 className="">{item?.name}</h1>
                  </div>

                  <div className="1/5">
                    <ItemQuantity item={item} />
                  </div>

                  <div>
                    <h2 className="2/5">
                      {(item?.price / 100) * item?.quantity}
                    </h2>
                  </div>
                </div>
              );
            })}
            <hr />
            <div className="flex justify-between my-[2rem] px-[0.5rem]">
              <span className="">Sub Total</span>
              {getItemsTotal()}
            </div>

            <div className="flex justify-center my-3">
              <button className="border border-yellow-400 bg-yellow-400 text-white p-[0.5rem]">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuList;
