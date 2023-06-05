import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";

import { IMG_CDN_URL } from "../config";

import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
  slaString,
  avgRating,
  costForTwoString,
}) => {
  // const {user} = useContext(UserContext);
  return (
    <div className="w-[270px] m-2 p-2 hover:shadow-lg">
      <img className="" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-md">{name}</h2>
      <h3 className="text-xs text-gray-700 w-[200px] overflow-hidden">{cuisines.join(", ")}</h3>

      {/* <h4 className="font-bold">{user.name}-{user.email}</h4> */}

      <div className="flex justify-between items-center my-6 font-semibold text-gray-700 text-xs">
        <div className="border border-green-500 bg-green-500 text-white flex items-center h-5 w-11 gap-1 py-0 px-1">
          <div className="">
            <AiFillStar />
          </div>
          <div className="">
            <h3> {avgRating}</h3>
          </div>
        </div>
        <div>▪</div>
        <div> <h3 className="">{slaString}</h3></div>
        <div>▪</div>
       <div>   <h3 className="">{costForTwoString}</h3></div>
     
      </div>
    </div>
  );
};

export default RestaurantCard;
