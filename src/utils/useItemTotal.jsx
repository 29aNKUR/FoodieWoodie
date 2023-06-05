import React from "react";
import { useSelector } from "react-redux";

const useItemTotal = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const getItemsTotal = () => {
    let total = Object.values(cartItems)
      .map((item) => {
         {/* if price of an item shows NaN */}
        return !item?.price
          ? (item?.variantsV2?.pricingModels[0].price / 100) * item?.quantity
          : (item?.price / 100) * item?.quantity;
      })
      .reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  return getItemsTotal;
};

export default useItemTotal;
