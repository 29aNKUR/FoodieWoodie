import React from 'react'
import { useSelector } from 'react-redux'

const useItemTotal = () => {

    const cartItems = useSelector((store)=>store.cart.items);

    const getItemsTotal = () => {
        let total = Object.values(cartItems).map((item)=>(item.price/100)*item.quantity)
        .reduce((acc,curr)=>acc+curr,0);
        return total;
    }
    
  return getItemsTotal;
}

export default useItemTotal