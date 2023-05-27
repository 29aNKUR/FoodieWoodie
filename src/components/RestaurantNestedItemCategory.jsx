import react from "react";
import RestaurantItemCategory from "./RestaurantItemCategory";


const RestaurantNestedItemCategory = ({nestedCategory}) => {

    // const [isVisible , setIsVisible] = useState();

    return (
        <div>
            <div className="">
                <h1>{nestedCategory?.title}</h1>
            </div>

            <div className="text-2xl font-bold">
                {nestedCategory?.categories?.map((category)=>{
                    <RestaurantItemCategory ItemCategory={category}/>
                })}
            </div>
        </div>
    )
}

export default RestaurantNestedItemCategory;