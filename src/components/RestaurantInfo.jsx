import React from "react";
import { IMG_CDN_URL } from "../config";

//info about restaurant
const RestaurantInfo = (restaurant) => {
  return (
    <div>
      {console.log(restaurant)}
      <div className="flex justify-evenly p-[5rem]">
        <img
          className="rounded-lg w-[300px] h-[200px]"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt=""
        />
        <div>
          {" "}
          <h1 className="text-xl font-bold">{restaurant.name}</h1>
          <h1 className="font-semibold">{restaurant.cuisines.join(",")}</h1>
          <h1 className="font-semibold">{restaurant.areaName}</h1>
          <h2 className="font-semibold">
            {restaurant.sla.lastMileTravelString}
          </h2>
        </div>
        <div className="border p-2">
          {" "}
          <h2>{restaurant.avgRatingString}</h2>
          <h2 className="font-semibold">
            {restaurant.totalRatingsString}
          </h2>{" "}
        </div>

        {/* side me - Stars
        no of ratings */}
      </div>
    </div>
  );
};

export default RestaurantInfo;
