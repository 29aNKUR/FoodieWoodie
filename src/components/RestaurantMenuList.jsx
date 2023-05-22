import React from 'react'
import RestaurantNestedItemCategory from './RestaurantNestedItemCategory'
import RestaurantItemCategory from './RestaurantItemCategory'


const RestaurantMenuList = ({menu}) => {
  return (
    <div>
        <div className=''>
            {menu && menu.map((item,index)=>(
              <div classname ="font-bold text-2xl" key={index}>
                             {item?.categories? 
                <RestaurantNestedItemCategory nestedCategory = {item}/> : <RestaurantItemCategory category = {item}/>}
              </div>
   
                // <h1>{item?.categories}</h1>
                
            ))}

        </div>
    </div>
  )
}

export default RestaurantMenuList