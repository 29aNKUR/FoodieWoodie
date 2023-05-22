import React from 'react'
import FoodItem from './FoodItem'


const RestaurantItemCategory = ({category}) => {


    const items = category?.itemCards.map((items)=>items?.card?.info)


  return (
    <div>
        <h1>{category?.title}</h1>
        <div>
        <FoodItem item = {items} />
        </div>

    </div>
  )
}

export default RestaurantItemCategory