import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';


// to add or remove item in the cart itself
const ItemQuantity = ({item}) => {

  const dispatch = useDispatch();



  return (
    <div>
      <div className="flex justify-between max-w-[6rem] text-green-600 border border-green-600 rounded px-2">
        <div >
        <button onClick={()=>dispatch(removeItem(item.id))}>
          -
        </button>
        </div>
      
        <span>{item.quantity}</span>
        <div>
        <button onClick={()=>dispatch(addItem(item))}>
          +
        </button>
        </div>
   
      </div>
    </div>
  )
}

export default ItemQuantity