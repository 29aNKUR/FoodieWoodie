import React from 'react'
import FoodItem from './FoodItem'


const RestaurantItemCategory = ({category}) => {


    // const items = category?.itemCards.map((items)=>items?.card?.info)


  return (
    <div>
        <h1 className='text-2xl font-bold'>{category?.title}</h1>
        <div>
          {
            category.itemCards.map((item,index) => (
              <div key={index}><FoodItem item = {item.card.info} /></div>
              
            ))
          }
        
        </div>

    </div>
  )
}

export default RestaurantItemCategory