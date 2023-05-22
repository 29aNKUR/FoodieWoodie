import React from 'react'
import { IMG_CDN_URL } from '../config';

const RestaurantInfo = (restaurant) => {
  return (
    <div>
        <div className='flex'>
        <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId} alt="" /> 
        <h1>{restaurant.name}</h1>
        </div>
       
    </div>
  )
}

export default RestaurantInfo