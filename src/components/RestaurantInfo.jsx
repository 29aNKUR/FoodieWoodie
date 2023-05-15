import React from 'react'
import { IMG_CDN_URL } from '../config';

const RestaurantInfo = (restaurant) => {
  return (
    <div>
        {/* //rstaurants.info["cloudinaryImageId"] */}
        <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId} alt="" /> 
    </div>
  )
}

export default RestaurantInfo