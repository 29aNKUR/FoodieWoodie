import { useContext } from "react";

import { IMG_CDN_URL } from "../config";

import UserContext from "../utils/UserContext";


const RestaurantCard = ({name,cuisines,lastMileTravelString, cloudinaryImageId})=>{

   
    // const {user} = useContext(UserContext);
    return (
        <div className="w-[200px] m-2 p-2 shadow-lg">
          <img className="" src={IMG_CDN_URL + cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
            {/* <h4 className="font-bold">{user.name}-{user.email}</h4> */}
        

        </div>
    )
}

export default RestaurantCard;