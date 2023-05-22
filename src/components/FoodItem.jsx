import { FOOD_ITEM_URL, IMG_CDN_URL } from "../config";

const FoodItem = ({ item }) => {
  return (
    <div className="w-[200px] m-2 p-2 shadow-lg bg-blue-100">
          {item.map((items) => (
        <div className="">
          <div>
            <img src={FOOD_ITEM_URL + items?.imageId} alt="" />
          </div>
          <div className="font-bold text-2xl">
            {" "}
            <h1>{items.name}</h1>
          </div>
          <div>
            {" "}
            <h2>{items.description}</h2>
          </div>
          <div>
            <p>{items.price / 100}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItem;
