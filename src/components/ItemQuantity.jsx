import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';


// to add or remove item in the cart itself
const ItemQuantity = ({item}) => {

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={()=>dispatch(removeItem(item.id))}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={()=>dispatch(addItem(item))}>
          +
        </button>
      </div>
    </div>
  )
}

export default ItemQuantity